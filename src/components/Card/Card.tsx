import React from 'react';
import './Card.scss';

interface ICardProps {
  title: string;
  imgSrc: string;
  imgAlt: string;
  price: number;
  type: string;
  onClick: (event: any) => void;
  buttonText: string;
}

export default function Card({
  title,
  imgSrc,
  imgAlt,
  price,
  type,
  onClick,
  buttonText,
}: ICardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card__title">{title}</div>
      <div className="card__img">
        <img src={imgSrc} alt={imgAlt} />
      </div>
      <div className="card__price">{price}</div>
      <div className="card__type">{type}</div>
      <div className="card__cart">
        <button className="button__add_product" type="button" onClick={onClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}
