import React, { useState } from "react";
import s from "./Header.module.scss";

import Logo from "../../images/svg/midasLogo.svg";

import Search from "../../images/svg/Search.svg";
import Basket from "../../images/svg/Basket.svg";
import Profile from "../../images/svg/Profile.svg";

const Header = () => {
  const [links, setLinks] = useState([
    { name: "Акции", link: "#" },
    { name: "Горячее", link: "#" },
    { name: "Холодное", link: "#" },
    { name: "Свежая выпечка", link: "#" },
    { name: "Десерты", link: "#" },
    { name: "Напитки", link: "#" },
  ]);

  const [navs, setNavs] = useState([
    { icon: Search, link: "#" },
    { icon: Basket, link: "#" },
    { icon: Profile, link: "#" },
  ]);

  return (
    <div className={s.wrapper}>
      <img src={Logo} alt="logo" />
      <div className={s.links}>
        {links.map((item, index) => (
          <li className={s.list} key={index}>
            <a className={s.link} href={item.link}>
              {item.name}
            </a>
          </li>
        ))}
      </div>

      <div className={s.navs}>
        {navs.map((nav, index) => (
          <img
            className={s.nav}
            key={index}
            src={nav.icon}
            href={nav.link}
            alt="icon"
          />
        ))}
      </div>
    </div>
  );
};

export default Header;
