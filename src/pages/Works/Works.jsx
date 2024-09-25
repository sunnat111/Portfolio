import React, { useEffect } from "react";
import s from "../Works/Works.module.scss";
import { scrollIcon } from "../../utils/ImgExport";


const Works = () => {

  return (
    <div className={s.works}>
      <div className="container">
        <div className={s.works__box}>
          <div className={s.works__box_top}>
            <button className={s.works__box_top_scroll}>
              <img src={scrollIcon} alt="" />
            </button>
            <div className={s.works__box_top_title}>
              <h2>Works</h2>
              <p>I had the pleasure of working with these awesome projects</p>
            </div>
          </div>
            <div className={s.works__box_bottom}>
              <h1></h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
