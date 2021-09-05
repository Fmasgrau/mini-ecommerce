/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './FormCheckout.scss';

interface IFormCheckoutProps {
  title?: string;
  number: JSX.Element;
  holder: JSX.Element;
  expire: JSX.Element;
  cvc: JSX.Element;
  confirmButtonText?: string;
  price?: number;
  handleClick: () => void;
}

export default function FormCheckout({
  title,
  number,
  holder,
  expire,
  cvc,
  confirmButtonText,
  price,
  handleClick,
}: IFormCheckoutProps): JSX.Element {
  return (
    <div className="form_checkout">
      <div className="form_checkout__container">
        <div className="form_checkout__title">{title}</div>

        <div className="form_checkout__inputs">
          <div className="section-1">
            <div className="items">{number}</div>
          </div>
          <div className="section-2">
            <div className="items">{holder}</div>
          </div>
          <div className="section-3">
            <div className="items">{expire}</div>
            <div className="items">{cvc}</div>
          </div>
        </div>
        <div className="form_checkout__proceed">
          <button
            type="button"
            className="btn"
            onClick={handleClick}
          >{`${confirmButtonText} $${price}`}</button>
        </div>
      </div>
    </div>
  );
}

FormCheckout.defaultProps = {
  title: 'Checkout',

  confirmButtonText: 'Proceed',
  price: 0,
};
