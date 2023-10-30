import React from "react";
import s from "./Preview.module.scss";

import STAKE from "../../images/stake.jpg";
import DOTS from "../../images/svg/dots.svg";
import DOTSSEC from "../../images/svg/dotsSec.svg";
import TIRAMISU from "../../images/tiramisu.png";

const Preview: React.FC = () => {
  let communications = ["+7 (499) 841-67-29", "delivery@midas.rest"];
  return (
    <div className={s.wrapper}>
      <div className={s.description}>
        <p className={s.text}>Доставка готовой еды из фермерских продуктов!</p>
        <img className={s.dots} src={DOTS} alt="dots" />
        {communications.map((item, index) => (
          <p className={s.communication} key={index}>
            {item}
          </p>
        ))}
        <div className={s.previewFood}>
          <img src={TIRAMISU} alt="food" />
          <p className={s.previewFoodName}>Тирамису</p>
          <div className={s.previewFoodBgWeight}>
            <p className={s.previewFoodWeight}>430г</p>
          </div>

          <div className={s.previewFoodContainer}>
            <p className={s.previewFoodPrice}>370р</p>
            <button className={s.btnBuy}></button>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <img className={s.photo} src={STAKE} alt="menu" />

        <div className={s.redGroup}>
          <div className={s.previewText}>
            <p className={s.title}>Стейк из лосося с овощами</p>
            <div className={s.weight}>
              <p>250 g</p>
            </div>
            <p className={s.description}>
              Нежный стейк дикого лосося, пропитанный соком и ароматом слегка
              обжаренных фермерских овощей
            </p>
            <div className={s.containerPrice}>
              <p className={s.price}>1 200 ₽</p>
              <button className={s.btnBuy}></button>
            </div>
          </div>
        </div>
        <img className={s.dotsSec} src={DOTSSEC} alt="dotsSec" />
      </div>
    </div>
  );
};

export default Preview;
