import React, { useState } from 'react';
import style from './SecBusinesses.module.css'
import autosImg from '../images/sec_businesses_img01.png'
import globalImg from '../images/sec_businesses_img02.png'
import softImg from '../images/sec_businesses_img03.png'
import chemicalImg from '../images/sec_businesses_img04.png'
import tradeImg from '../images/sec_businesses_img05.png'
import arrowImg from '../images/sec_businesses_arrow.png'


function SecBusinesses({businessesRef}) {

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const items = [
        {
            title: 'PUFFU AUTOS',
            desc: '자판기와 키오스크 기술을 중심으로\n무인 유통의 가능성을 넓혀가는 자동화 브랜드',
            img: autosImg,
            alt: '푸푸오토스',
            url: 'http://puffuautos.com/',
            overlayColor: 'rgba(255, 87, 34, 0.5)',
        },
        {
            title: 'PUFFU GLOBAL',
            desc: '한국 브랜드의 중국 시장 진출을 위해\n고객응대, 마케팅까지 지원합니다.',
            img: globalImg,
            alt: '푸푸글로벌',
            url: 'https://puffuglobal.com/',
            overlayColor: 'rgba(0, 100, 255, 0.5)',
        },
        {
            title: 'PUFFU SOFT',
            desc: '디자인, 프로그램 개발 등\n사용자 중심의 실용적 솔루션을 만듭니다.',
            img: softImg,
            alt: '푸푸소프트',
            url: 'https://puffusoft.com/',
            overlayColor: 'rgba(156, 44, 255, 0.5)',
        },
        {
            title: 'PUFFU CHEMICAL',
            desc: '맞춤형 액상 개발부터 OEM·ODM까지.\n전자담배 액상 전문 제조기업',
            img: chemicalImg,
            alt: '푸푸케미칼',
            url: 'https://puffuchemical.com/',
            overlayColor: 'rgba(26, 163, 46, 0.5)',
        },
        {
            title: 'PUFFU TRADE',
            desc: '합성 니코틴 독점 계약 기반의\n수출입 통합 무역 서비스를 제공합니다.',
            img: tradeImg,
            alt: '푸푸트레이드',
            url: 'https://puffutrade.com/',
            overlayColor: 'rgba(18, 148, 229, 0.5)',
        },
    ];

    return (
        <section className={style.wrap} ref={businessesRef}>
            <div className={style.txt_box} >
                <h3>BUSINESSES</h3>
                <p>
                    다양한 분야에서 하나의 철학을 공유하는 <br className={style.m_br} />
                    푸푸 패밀리를 소개합니다.
                </p>
            </div>
            <div className={style.accordion_container}>
                <ul>
                    {items.map((item, index) => {
                        const isActive = hoveredIndex === null ? index === 0 : index === hoveredIndex;

                        return (
                            <li
                                key={index}
                                className={`${style.item} ${isActive ? style.active : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className={style.img_box}>
                                    <img src={item.img} alt={item.alt} />
                                </div>
                                <div className={style.hover_on}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <p>사이트 방문하기</p>
                                            <div className={style.img_box}>
                                                <img src={arrowImg} alt="사이트 방문하기" />
                                            </div>
                                        </div>
                                    </a>
                                    <div className={style.txt_box}>
                                        <p>
                                            {item.desc.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                                <div className={style.hover_off}>
                                    <div className={style.overlay} style={{ background: item.overlayColor }} />
                                    <h5>{item.title}</h5>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className={style.m_accordion_container}>
                <ul>
                    {items.map((item, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <li
                                key={index}
                                className={`${style.item} ${isActive ? style.active : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className={style.img_box}>
                                    <img src={item.img} alt={item.alt} />
                                </div>
                                <div className={style.hover_on}>
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                                        <div>
                                            <p>사이트 방문하기</p>
                                            <div className={style.img_box}>
                                                <img src={arrowImg} alt="사이트 방문하기" />
                                            </div>
                                        </div>
                                    </a>
                                    <div className={style.txt_box}>
                                        <p>
                                            {item.desc.split('\n').map((line, i) => (
                                                <React.Fragment key={i}>
                                                    {line}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </p>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                                <div className={style.hover_off}>
                                    <div className={style.overlay} style={{ background: item.overlayColor }} />
                                    <h5>{item.title}</h5>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}

export default SecBusinesses;