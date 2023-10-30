import React, { useState } from "react";
import s from "./Header.module.scss";
import { Link } from "react-router-dom";

import Logo from "../../images/svg/midasLogo.svg";

import Search from "../../images/svg/Search.svg";
import Basket from "../../images/svg/Basket.svg";
import Profile from "../../images/svg/Profile.svg";

const Header = () => {
  const [links, setLinks] = useState([
    { name: "Акции", link: "#" },
    { name: "Горячее", link: "/hotFoods" },
    { name: "Холодное", link: "#" },
    { name: "Свежая выпечка", link: "#" },
    { name: "Десерты", link: "#" },
    { name: "Напитки", link: "#" },
  ]);

  const [navs, setNavs] = useState([
    { icon: Search, link: "/" },
    { icon: Basket, link: "/basket" },
    { icon: Profile, link: "/" },
  ]);

  return (
    <div className={s.wrapper}>
      <Link to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className={s.links}>
        {links.map((item, index) => (
          <li className={s.list} key={index}>
            <Link className={s.link} to={item.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </div>

      <div className={s.navs}>
        {navs.map((nav, index) => (
          <Link className={s.nav} key={index} to={nav.link}>
            <img src={nav.icon} alt="icon" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
