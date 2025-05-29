import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import style from './SecWhy.module.css'
import selfIcon from '../images/sec_why_img01.png'
import globalIcon from '../images/sec_why_img02.png'
import officeIcon from '../images/sec_why_img03.png'
import partnerIcon from '../images/sec_why_img04.png'

gsap.registerPlugin(ScrollTrigger);

function SecWhy({ whyRef }) {
    const boxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                    markers: false,
                },
            }
        );
    }, []);

    return (
        <section className={style.wrap} ref={whyRef} >
            <div className={style.txt_box}>
                <h3>WHY PUFFU?</h3>
                <p>
                    기술력에서 생산까지 <br className={style.m_br} />
                    우리는 전 과정을 직접 책임지는 브랜드입니다.
                </p>
            </div>
            <ul className={style.itme_box} ref={boxRef}>
                <li>
                    <div className={style.img_box}>
                        <img src={selfIcon} alt='자체생산' />
                    </div>
                    <h5>자체 생산 기반</h5>
                    <p>
                        니코틴과 액상 등 주요<br className={style.m_br} />
                        원료부터 완제품까지<br className={style.m_br} />
                        전 과정을 직접 제조합니다.
                    </p>
                </li>
                <li>
                    <div className={style.img_box}>
                        <img src={globalIcon} alt='자체생산' />
                    </div>
                    <h5>글로벌 대응력</h5>
                    <p>
                        글로벌 유통 인프라와 <br className={style.m_br} />
                        다국가 파트너십 경험을 <br className={style.m_br} />
                        보유하고 있습니다.
                    </p>
                </li>
                <li>
                    <div className={style.img_box}>
                        <img src={officeIcon} alt='자체생산' />
                    </div>
                    <h5>세분화된 계열사 운영</h5>
                    <p>
                        제조 및 판매, 무역,<br className={style.m_br} />
                        IT 솔루션 등 각 분야별 <br className={style.m_br} />
                        전문 계열사를 운영중입니다.
                    </p>
                </li>
                <li>
                    <div className={style.img_box}>
                        <img src={partnerIcon} alt='자체생산' />
                    </div>
                    <h5>믿을 수 있는 파트너십</h5>
                    <p>
                        신뢰를 바탕으로 한 유통과 <br className={style.m_br} />
                        고객 응대 시스템을 갖추고 <br className={style.m_br} />
                        있습니다.
                    </p>
                </li>
            </ul>
        </section>
    )
}

export default SecWhy;