import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import style from './SecAbout.module.css'
import puffuLogo from '../images/puffu_logo_w.png'
import globalIcon from '../images/sec_about_img01.png'
import techIcon from '../images/sec_about_img02.png'
import trustIcon from '../images/sec_about_img03.png'
import selfIcon from '../images/sec_about_img04.png'

gsap.registerPlugin(ScrollTrigger);

function SecAbout({ aboutRef }) {
    const boxRef = useRef(null);
    const visionBoxRef = useRef(null);

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
    useEffect(() => {
        gsap.fromTo(
            visionBoxRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: visionBoxRef.current,
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse',
                    markers: false,
                },
            }
        );
    }, []);

    return (
        <section className={style.wrap} ref={aboutRef}>
            <div className={style.subheading_box}>
                <div className={style.speech_bubble}>
                    <div className={style.slider_wrap}>
                        <div className={style.slider_track}>
                            {[...Array(2)].map((_, i) => (
                                <div className={style.slide} key={i}>
                                    {[...Array(10)].map((_, j) => (
                                        <img key={j} src={puffuLogo} alt="puffu" />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={style.txt_box}>
                    <h2>
                        자체 기술과 생산으로 <br className={style.br} />
                        <span>신뢰를 만들고</span>
                    </h2>
                    <h2>
                        지속 가능한 산업의 <br className={style.br} />
                        <span>기준이 됩니다</span>
                    </h2>
                </div>
            </div>
            <div className={style.about_us} >
                <div className={style.txt_box}>
                    <h3>ABOUT US</h3>
                    <p>
                        기술과 신뢰를 바탕으로 글로벌 시장을 향해 <br className={style.m_br} />
                        안정적인 생산과 책임 있는 브랜드 가치를 실현합니다.
                    </p>
                </div>
                <ul className={style.item_box} ref={boxRef}>
                    <li>
                        <div className={style.keyword_box}>
                            <div className={style.item_txt}>
                                <h5>글로벌</h5>
                                <h5 className={style.en_txt}>GLOBAL</h5>
                            </div>
                            <div className={style.img_box}>
                                <img src={globalIcon} alt='GLOBAL' />
                            </div>
                        </div>
                        <div className={style.sub_txt_box}>
                            <p>
                                세계 각지의 파트너와 함께 <br />
                                시장을 연결하고 확장합니다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={style.keyword_box}>
                            <div className={style.item_txt}>
                                <h5>기술력</h5>
                                <h5 className={style.en_txt}>TECHNOLOGY</h5>
                            </div>
                            <div className={style.img_box}>
                                <img src={techIcon} alt='TECHNOLOGY' />
                            </div>
                        </div>
                        <div className={style.sub_txt_box}>
                            <p>
                                빠르게 변화하는 산업 속에서도 <br />
                                앞서가는 기술을 개발합니다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={style.keyword_box}>
                            <div className={style.item_txt}>
                                <h5>신뢰</h5>
                                <h5 className={style.en_txt}>TRUST</h5>
                            </div>
                            <div className={style.img_box}>
                                <img src={trustIcon} alt='TRUST' />
                            </div>
                        </div>
                        <div className={style.sub_txt_box}>
                            <p>
                                지속적인 품질 관리와 책임 있는 <br />
                                서비스를 통해 신뢰를 쌓습니다.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={style.keyword_box}>
                            <div className={style.item_txt}>
                                <h5>자체생산</h5>
                                <h5 className={style.en_txt}>SELF-PRODUCTION</h5>
                            </div>
                            <div className={style.img_box}>
                                <img src={selfIcon} alt='SELF-PRODUCTION' />
                            </div>
                        </div>
                        <div className={style.sub_txt_box}>
                            <p>
                                원료부터 완제품까지 <br />
                                직접 만드는 경쟁력으로 차별화합니다.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={style.vision_box} ref={visionBoxRef}>
                <div className={style.txt_box}>
                    <h3>
                        우리는 유연한 <br className={style.br} />
                        생각과 실행으로 <br />
                        변화를 이끌어갑니다
                    </h3>
                    <p>
                        시장의 흐름에 유연하게 반응하며 <br />
                        지속가능한 미래를 만듭니다.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SecAbout;