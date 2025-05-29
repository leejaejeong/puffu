import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import style from './SecContact.module.css'
import SecContactArrow from '../images/sec_contact_arrow.png'
import footerLogo from '../images/puffu_footer_logo.png'
import topBtn from '../images/footer_arrow.png'
import arrowImg from '../images/arrow.png'

gsap.registerPlugin(ScrollTrigger);

function SecContact({ contactRef }) {

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    const box01Ref = useRef(null);
    const box02Ref = useRef(null);
    
        useEffect(() => {
            gsap.fromTo(
                box01Ref.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: box01Ref.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        toggleActions: 'play none none reverse',
                        markers: false,
                    },
                }
            );
        }, []);

        useEffect(() => {
            gsap.fromTo(
                box02Ref.current,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: box02Ref.current,
                        start: 'top 80%',
                        end: 'top 30%',
                        toggleActions: 'play none none reverse',
                        markers: false,
                    },
                }
            );
        }, []);

    return (
        <section className={style.wrap} ref={contactRef}>
            <ul className={style.contact_box}>
                <li ref={box01Ref}>
                    <span>CONTACT</span>
                    <h5>사업문의 및 제휴 문의</h5>
                    <p>
                        푸푸는 언제나 열린 마음으로 <br />
                        기다리고 있습니다.
                    </p>
                    <div
                        className={style.goTo_box}
                        onClick={() => window.open('https://www.worldintl.co.kr/support/contactUs', '_blank')}>
                        <span>바로가기</span>
                        <div className={style.img_box}>
                            <img src={SecContactArrow} alt="바로가기" />
                        </div>
                    </div>
                </li>
                <li ref={box02Ref}>
                    <span>STORE</span>
                    <h5>자사 전자담배 액상 쇼핑몰</h5>
                    <p>
                        검증된 품질, 믿을 수 있는 선택.<br />
                        지금 바로 푸푸 액상을 만나보세요.
                    </p>
                    <div
                        className={style.goTo_box}
                        onClick={() => window.open('https://www.worldvape.co.kr/', '_blank')}>
                        <span>바로가기</span>
                        <div className={style.img_box}>
                            <img src={SecContactArrow} alt="바로가기" />
                        </div>
                    </div>
                </li>
            </ul>
            <footer>
                <div className={style.f_logo}>
                    <div className={`${style.img_box} ${style.footer_logo_img}`}>
                        <img src={footerLogo} alt="puffu" />
                    </div>
                    <div
                        className={`${style.img_box} ${style.topbtn_img}`}
                        onClick={() => goToTop()}>
                        <img src={topBtn} alt="scroll top" />
                    </div>
                </div>
                <div className={style.f_nav}>
                    <ul>
                        <li>
                            <div className={style.img_box}>
                                <img src={arrowImg} alt="바로가기" />
                            </div>
                            <p onClick={() => window.open('http://puffuautos.com/', '_blank')}>
                                PUFFU AUTOS
                            </p>
                        </li>
                        <li>
                            <div className={style.img_box}>
                                <img src={arrowImg} alt="바로가기" />
                            </div>
                            <p onClick={() => window.open('https://puffuglobal.com/', '_blank')}>
                                PUFFU GLOBAL
                            </p>
                        </li>
                        <li>
                            <div className={style.img_box}>
                                <img src={arrowImg} alt="바로가기" />
                            </div>
                            <p onClick={() => window.open('https://puffusoft.com/', '_blank')}>
                                PUFFU SOFT
                            </p>
                        </li>
                        <li>
                            <div className={style.img_box}>
                                <img src={arrowImg} alt="바로가기" />
                            </div>
                            <p onClick={() => window.open('https://puffuchemical.com/', '_blank')}>
                                PUFFU CHEMICAL
                            </p>
                        </li>
                        <li>
                            <div className={style.img_box}>
                                <img src={arrowImg} alt="바로가기" />
                            </div>
                            <p onClick={() => window.open('https://puffutrade.com/', '_blank')}>
                                PUFFU TRADE
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={style.f_info}>
                    <div className={style.f_info_box}>
                        <span>
                            <strong>(주)푸푸</strong>
                        </span>
                        <span>
                            <strong>대표</strong>
                            원태범
                        </span>
                        <span>
                            <strong>주소</strong>
                            대전광역시 서구 관저중로95번길 74, 3층(관저동)
                        </span>
                    </div>
                    <div className={style.copy_box}>
                        <span>
                            © PUFFU ALL RIGHTS RESERVED.
                        </span>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default SecContact;
