import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import style from './MainVisual.module.css'
import mainVisual from '../video/main_visual.mp4'

function MainVisual() {
    const h1Ref = useRef(null);
    const pRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      h1Ref.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      pRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.5 }
    );
  }, []);

    return (
        <div className={style.wrap}>
            <div className={style.video_box}>
                <video src={mainVisual} autoPlay muted loop playsInline />
            </div>
            <div className={style.txt_box}>
                <h1 ref={h1Ref}>
                    기술을 바탕으로 <br className={style.br} />
                    만족을 향해
                </h1>
                <p ref={pRef}>
                    탄탄한 기술역량을 바탕으로<br />
                    끊임없이 고객 만족을 추구합니다.
                </p>
            </div>
        </div>
    )
};

export default MainVisual;