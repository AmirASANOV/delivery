import React from "react";
import s from "./CardItem.module.scss";

interface ICardItem {
  URL: string;
  name: string;
  weight: number;
  description: string;
  prevPrice: number | null;
  currentPrice: number;
  countKind: null | number;
  typeFood: null | string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const CardItem: React.FC<ICardItem> = (props) => {
  return (
    <div className={s.cardFood}>
      <img src={props.URL} alt="img" />
      <p className={s.cardName}>{props.name}</p>
      <div className={s.bgWeight}>
        <p className={s.weight}>{props.weight} Г</p>
      </div>
      <p className={s.description}>{props.description}</p>
      <div className={s.cardPrice}>
        {props.prevPrice ? (
          <div className={s.prevPriceContainer}>
            <p className={s.prevPrice}>{props.prevPrice} ₽</p>
            <p className={s.currentPrice}>{props.currentPrice} ₽</p>
          </div>
        ) : (
          <p className={s.currentPrice}>{props.currentPrice} ₽</p>
        )}

        <button onClick={props.onClick} className={s.btnBuy}></button>
      </div>
    </div>
  );
};

export default CardItem;
