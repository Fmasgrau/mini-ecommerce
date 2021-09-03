import React from 'react';
import './ModalBody.scss';

export default function ModalBody(): JSX.Element {
  return (
    <>
      <div className="modal_body__container">
        <div className="modal_body__header">Header</div>
        <div className="modal_body__body">
          <div className="modal_body__body--description">Description</div>
          <div className="modal_body__body--aggregation">
            <p>1</p>
            <div>
              <button type="button">+</button>
              <button type="button">-</button>
            </div>
          </div>
          <div className="modal_body__body--deleteall">
            <button type="button">DeleteAll</button>
          </div>
        </div>
        <div className="modal_body__total_price">
          <p>Total Price:</p>
          <p>1.50</p>
        </div>
        <div className="modal_body__checkout">
          <button type="button">checkout</button>
        </div>
      </div>
    </>
  );
}
