import React from 'react';
import './ModalBody.scss';

interface IModalbodyProps {
  header: string;
  total: number;
  children: JSX.Element;
  checkout: () => void;
}

export default function ModalBody({
  header,
  total,
  children,
  checkout,
}: IModalbodyProps): JSX.Element {
  return (
    <>
      <div className="modal_body__container">
        <div className="modal_body__header">{header}</div>
        <div className="modal_body__body">{children}</div>
        <div className="modal_body__total_price">
          <p>Total Price:</p>
          <p>{total}</p>
        </div>
        <div className="modal_body__checkout">
          <button type="button" onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
