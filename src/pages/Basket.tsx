import React from "react";
import s from "./Basket.module.scss";
import { foodsArr } from "../components/arrayFoods/arrayFoods";
import BasketItem from "../components/BasketItem/BasketItem";

const Basket: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Корзина</h1>
      <p className={s.path}>
        Главная / <span className={s.spanText}>Корзина</span>
      </p>

      <div className={s.template}>
        <div className={s.templImage}></div>
        <p className={s.food}>Блюдо: </p>
        <p className={s.price}>Цена: </p>
        <div className={s.tamplRem}></div>
      </div>

      {foodsArr.map((item, index) => (
        <BasketItem
          key={index}
          URL={item.URL}
          name={item.name}
          weight={item.weight}
          description={item.description}
          currentPrice={item.currentPrice}
          onClick={() => console.log(item)}
        />
      ))}
    </div>
  );
};

export default Basket;
