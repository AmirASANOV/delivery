import React, { useState } from "react";
import s from "./Footer.module.scss";
import logo from "../../images/svg/midasLogo.svg";

const Footer = () => {
  const navs = [
    { name: "Обратная связь", link: "#" },
    { name: "Доставка", link: "#" },
    { name: "Оплата", link: "#" },
    { name: "Контакты", link: "#" },
  ];

  const contacts = ["+7(495)345-23-23", "pochta@mail.com"];

  const politics = [
    "Политика конфиденциальности и оферта",
    "Пользовательское соглашение",
  ];
  return (
    <div className={s.wrapper}>
      <div className={s.communicate}>
        <div className={s.box}>
          <img className={s.logo} src={logo} alt="logo" />
          {navs.map((nav, index) => (
            <li key={index}>
              <a className={s.link} href={nav.link}>
                {nav.name}
              </a>
            </li>
          ))}
        </div>

        <div className={s.contacts}>
          {contacts.map((contact, index) => (
            <p className={s.contact} key={index}>
              {contact}
            </p>
          ))}
        </div>
      </div>

      <div className={s.politic}>
        <p className={s.ref}>© 2009–2019, ООО «MIDAS», официальный сайт</p>
        <div className={s.offer}>
          {politics.map((ref, index) => (
            <a className={s.ref} key={index} href="#">
              {ref}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
