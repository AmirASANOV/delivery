import React from "react";
import s from "./PopularFoors.module.scss";
import { foodsArr } from "../components/arrayFoods/arrayFoods";
import CardItem from "../components/CardItem.tsx/CardItem";

const PopularFoods: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Популярные блюда</p>
      <div className={s.container}>
        {foodsArr.map((item, index) => (
          <CardItem
            key={index}
            URL={item.URL}
            name={item.name}
            weight={item.weight}
            description={item.description}
            prevPrice={item.prevPrice}
            currentPrice={item.currentPrice}
            countKind={item.countKind}
            onClick={() => console.log(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularFoods;
