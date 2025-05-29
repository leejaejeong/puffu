import React, { useEffect, useRef, useState } from 'react';
import './reset.css';
import './App.css';
import MainVisual from './components/MainVisual';
import SecAbout from './components/SecAbout';
import SecBusinesses from './components/SecBusinesses';
import SecWhy from './components/SecWhy';
import SecContact from './components/SecContact';
import logoImg from './images/puffu_logo.png'
import puffuIcon from './images/puffu_smile.png'
import arrow_icon from './images/Inquiry_arrow.png'

function App() {

    const goToTop = () => {
        isScrollingRef.current = true;
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        // 스크롤 애니메이션 종료 시점에 activeMenu 초기화
        setTimeout(() => {
            setActiveMenu(null);
            isScrollingRef.current = false; // 스크롤 이동 종료 알림
        }, 500); // 500ms는 스크롤 애니메이션 예상 시간 (필요하면 조절)
    }

    const aboutRef = useRef(null);
    const businessesRef = useRef(null);
    const whyRef = useRef(null);
    const contactRef = useRef(null);

    const goToAbout = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const goToBusinesses = () => {
        window.scrollTo({
            top: businessesRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const goToWhy = () => {
        window.scrollTo({
            top: whyRef.current.offsetTop,
            behavior: 'smooth',
        })
    }
    const goToContact = () => {
        window.scrollTo({
            top: contactRef.current.offsetTop,
            behavior: 'smooth',
        })
    }

    const [isScrolled, setIsScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState(null);
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const isScrollingRef = useRef(false);

    const menuItems = [
        { id: 'about', label: 'ABOUT', onClick: goToAbout, ref: aboutRef },
        { id: 'businesses', label: 'BUSINESSES', onClick: goToBusinesses, ref: businessesRef },
        { id: 'why', label: 'WHY PUFFU', onClick: goToWhy, ref: whyRef },
        { id: 'contact', label: 'CONTACT', onClick: goToContact, ref: contactRef },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingRef.current) return;

            const scrollY = window.scrollY + window.innerHeight / 2; // 화면 중간 기준
            setIsScrolled(Math.round(window.scrollY) > 2);


            // 현재 스크롤 위치로 activeMenu 갱신
            let currentActive = null;
            for (let i = 0; i < menuItems.length; i++) {
                const ref = menuItems[i].ref;
                if (ref.current) {
                    const offsetTop = ref.current.offsetTop;
                    const offsetHeight = ref.current.offsetHeight;

                    // 현재 스크롤 위치가 섹션 영역 내에 있으면 active
                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        currentActive = menuItems[i].id;
                        break;
                    }
                }
            }
            setActiveMenu(currentActive);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // 초기 호출

        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuItems]);



    const handleClick = (id, onClickFn) => {
        setActiveMenu(id);
        isScrollingRef.current = true;
        onClickFn();

        // 스크롤 이동 애니메이션 종료 후 isScrollingRef 해제 (예: 500ms 후)
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 500);
    };

    return (
        <div className="wrap">
            <header className={`header ${isScrolled ? 'sticky' : ''}`}>
                <div
                    className='logo_box'
                    onClick={() => goToTop()}
                >
                    <img src={logoImg} alt='puffu' />
                </div>
                <nav>
                    <ul>
                        {menuItems.map((item) => {
                            const isActive = activeMenu === item.id;
                            const isHovered = hoveredMenu === item.id;

                            return (
                                <li
                                    key={item.id}
                                    className={isActive ? 'active' : ''}
                                    onMouseEnter={() => setHoveredMenu(item.id)}
                                    onMouseLeave={() => setHoveredMenu(null)}
                                >
                                    <div
                                        className={`puffu_icon ${isActive || isHovered ? 'visible' : 'hidden'}`}
                                    >
                                        <img src={puffuIcon} alt="푸푸아이콘" />
                                    </div>
                                    <p onClick={() => handleClick(item.id, item.onClick)}>{item.label}</p>
                                </li>
                            );
                        })}
                        {/* <li>
                            <div className='puffu_icon'>
                                <img src={puffuIcon} alt='푸푸아이콘' />
                            </div>
                            <p onClick={() => { goToAbout(); }}>ABOUT</p>
                        </li>
                        <li>
                            <div className='puffu_icon'>
                                <img src={puffuIcon} alt='푸푸아이콘' />
                            </div>
                            <p onClick={() => { goToBusinesses(); }}>BUSINESSES</p>
                        </li>
                        <li>
                            <div className='puffu_icon'>
                                <img src={puffuIcon} alt='푸푸아이콘' />
                            </div>
                            <p onClick={() => { goToWhy(); }}>WHY PUFFU</p>
                        </li>
                        <li>
                            <div className='puffu_icon'>
                                <img src={puffuIcon} alt='푸푸아이콘' />
                            </div>
                            <p onClick={() => { goToContact(); }}>CONTACT</p>
                        </li> */}
                    </ul>
                </nav>
                <div className='btn_box'>
                    <button onClick={() => window.open('https://www.worldintl.co.kr/support/contactUs', '_blank')}>
                        <p>사업문의</p>
                        <div className='img_box'>
                            <img src={arrow_icon} alt='사업문의' />
                        </div>
                    </button>
                </div>
            </header>
            <MainVisual />
            <SecAbout aboutRef={aboutRef} />
            <SecBusinesses businessesRef={businessesRef} />
            <SecWhy whyRef={whyRef} />
            <SecContact contactRef={contactRef} />
        </div>
    );
}

export default App;
