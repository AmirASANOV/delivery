import React, { useState } from "react";
import s from "./PopularFoors.module.scss";
import { foodsArr } from "../components/arrayFoods/arrayFoods";
import CardItem from "../components/CardItem.tsx/CardItem";

interface IOrders {
  URL: string;
  name: string;
  currentPrice: number;
  typeFood: string | null;
}

const PopularFoods: React.FC = (props) => {
  const [orders, setOrders] = useState<IOrders[]>([]);

  function addOrder(item: any) {
    // danger
    setOrders([...orders, item]);
    return orders;
  }

  console.log(orders);

  return (
    <div className={s.wrapper}>
      <p className={s.title}>Популярные блюда</p>
      <div className={s.container}>
        {foodsArr.map((item, index) =>
          item.typeFood === null ? (
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
              onClick={() => addOrder(item)}
            />
          ) : null
        )}
      </div>
    </div>
  );
};

export default PopularFoods;
