import React from "react";
import s from "./Basket.module.scss";
import remBtn from "../../images/svg/remBtn.svg";

interface IBasketItemProps {
  URL: string;
  name: string;
  weight: number;
  description: string;
  currentPrice: number;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const BasketItem: React.FC<IBasketItemProps> = (props) => {
  return (
    <div className={s.item}>
      <img className={s.image} src={props.URL} alt="logo" />
      <div className={s.food}>
        <p className={s.itemName}>{props.name}</p>
        <div className={s.bgWeight}>
          <p className={s.weight}>{props.weight} г</p>
        </div>
      </div>
      <p className={s.price}>{props.currentPrice} ₽</p>

      <img className={s.remBtn} src={remBtn} alt="remove" />
    </div>
  );
};

export default BasketItem;
