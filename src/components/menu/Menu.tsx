import React from "react";
import s from "./Menu.module.scss";
import array from "./ArrayCard";

const Menu: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Меню</p>

      <div className={s.visible}>
        <div className={s.container}>
          {array.map((item, index) => (
            <div key={index} className={s.card}>
              {item.URL !== null ? <img src={item.URL} alt="bg" /> : null}
              <p className={s.cardTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
