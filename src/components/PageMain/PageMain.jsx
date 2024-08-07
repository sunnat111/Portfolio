import React from "react";
import s from "../PageMain/PageMain.module.scss";
import {
  faceIcon,
  emailIcon,
  linkIcon,
  locIcon,
  scaleIcon,
  downloadIcon
} from "../../utils/ImgExport";

const PageMain = () => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.main__box}>
          <h1 className={s.main__box_title}>Developer</h1>
          <div className={s.main__box_center}>
            <div className={s.main__box_center_about}>
              <img src={faceIcon} alt="" />
              <h3 className={s.main__box_center_about_title}>Sunnat</h3>
              <p className={s.main__box_center_about_desc}>
                Full-stack developer
              </p>
            </div>
            <ul className={s.main__box_center_list}>
              <li>
                <img src={emailIcon} alt="" />
                <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
                  sunnat172006@gmail.com
                </a>
              </li>
              <li>
                <img src={locIcon} alt="" />
                <p>Uzbekistan</p>
              </li>
              <li>
                <img src={scaleIcon} alt="" />
                <p>Full-time / Web-developer</p>
              </li>
              <li>
                <img src={linkIcon} alt="" />
                <a href="">www.sunnat172009.com</a>
              </li>
            </ul>
            <ul className={s.main__box_center_lang}>
              <li>
                <p>HTML</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>JS</p>
              </li>
              <li>
                <p>REACT</p>
              </li>
            </ul>
            <button className={s.main__box_center_button}>
              <a className={s.main__box_center_button_text}>Download CV</a>
              <img src={downloadIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className={s.main__box_bottom}>wefwef</div>
    </div>
  );
};

export default PageMain;
