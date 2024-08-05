import React from 'react'
import s from '../Header/Header.module.scss'
import { instagramIcon, discordIcon, githubIcon, searchIcon } from '../../utils/ImgExport'

const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
            <div className={s.header__main}>
            <div className={s.header__main_left}>
                    <span>
                        C
                    </span>
                    <h2>Sunnat Azizbekov</h2>
                </div>
                <div className={s.header__main_right}>
                    <ul className={s.header__main_right_pages}>
                        <li><a href="">Home</a></li>
                        <li><a href="">Blogs</a></li>
                    </ul>
                    <div className={s.header__main_right_search}>
                        <input type="text" className={s.header__main_right_input} />
                        <img src={searchIcon} alt="" />
                    </div>
                    <ul className={s.header__main_right_list}>
                        <li>
                            <img src={instagramIcon} alt="" className={s.header__main_right_list_img} />
                            <span><a href="https://www.youtube.com/@programmer667">Instagram</a></span>
                        </li>
                        <li>
                            <img src={discordIcon} alt="" className={s.header__main_right_list_img} />
                            <span><a href="https://t.me/pythonwith">Discord</a></span>
                        </li>
                        <li>
                            <img src={githubIcon} alt="" className={s.header__main_right_list_img} />
                            <span><a href="https://github.com/sunnat111">Github</a></span>
                        </li>
                    </ul>

                </div>
            </div>

            </div>
        </header>
    )
}

export default Header