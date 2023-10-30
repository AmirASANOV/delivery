import React from "react";
import s from "./HotFoods.module.scss";
import CardItem from "../components/CardItem.tsx/CardItem";
import { foodsArr } from "../components/arrayFoods/arrayFoods";

const HotFoods: React.FC = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.title}>Горячие блюда</p>
      <p className={s.path}>
        Главная / <span className={s.spanText}> Горячие блюда</span>
      </p>

      <div className={s.container}>
        <div className={s.select}>
          <select name="filterHotFoods" id="1">
            <option value="по возрастанию цены">по возрастанию цены</option>
            <option value="по убыванию цены">по убыванию цены</option>
          </select>
        </div>

        <div className={s.cards}>
          {foodsArr.map((item, index) =>
            item.typeFood === "hot" ? (
              <CardItem
                key={index}
                URL={item.URL}
                name={item.name}
                weight={item.weight}
                description={item.description}
                prevPrice={item.prevPrice}
                currentPrice={item.currentPrice}
                countKind={item.countKind}
                typeFood={item.typeFood}
                onClick={() => console.log(item)}
              />
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default HotFoods;
