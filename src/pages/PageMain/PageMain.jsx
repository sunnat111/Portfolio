import React from "react";
import s from "./PageMain.module.scss";
import {
  faceIcon,
  emailIcon,
  linkIcon,
  locIcon,
  scaleIcon,
  downloadIcon,
} from "../../utils/ImgExport";

const PageMain = () => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.main__box}>
          <h1 className={s.main__box_title}>Web Developer</h1>
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
                <a href="https://ru.wikipedia.org/wiki/HTML">HTML</a>
              </li>
              <li>
                <a href="https://ru.wikipedia.org/wiki/CSS">CSS</a>
              </li>
              <li>
                <a href="https://learn.javascript.ru/">JS</a>
              </li>
              <li>
                <a href="https://react.dev/">REACT</a>
              </li>
            </ul>

            <div className={s.main__box_center_link}>
              <a href="" className={s.main__box_center_text}>
                Download CV
                <img src={downloadIcon} alt="" />
              </a>
            </div>
          </div>
          <div className={s.main__box_bottom}>
            <div className={s.main__box_bottom_left}>
              <h1 className={s.main__box_bottom_left_title}>
                Hey <br /> I’m <span>Sunnat</span>
                , <br /> Full-stack developer
              </h1>
              <p className={s.main__box_bottom_left_text}>
                I help business grow by crafting amazing web experiences. If
                you’re <br />
                looking for a developer that likes to get stuff done,
              </p>
              <a href="https://t.me/S200917">
                let’s talk <img src={emailIcon} alt="" />
              </a>
            </div>
            <div className={s.main__box_bottom_right}>
              <ul className={s.main__box_bottom_right_list}>
                <li>
                  <span>2</span>
                  <p>
                    Programming <br /> Language
                  </p>
                </li>
                <li>
                  <span>3</span>
                  <p>
                    Development <br /> Tools
                  </p>
                </li>
                <li>
                  <span>3</span>
                  <p>
                    Years of <br /> Experience
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageMain;
