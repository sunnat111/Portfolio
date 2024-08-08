import React from "react";
import s from "../Aboutme/Aboutme.module.scss";

const Aboutme = () => {
  return (
    <div className={s.about}>
      <div className="container">
        <div className={s.about__box}>
          <div className={s.about__box_top}>
            <h3 className={s.about__box_top_title}>Scroll</h3>
          </div>
          <div className={s.about__box_bottom}>
            <div className={s.about__box_bottom_left}></div>
            <div className={s.about__box_bottom_right}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
