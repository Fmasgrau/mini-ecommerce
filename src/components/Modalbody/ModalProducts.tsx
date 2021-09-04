import React from 'react';
import './ModalBody.scss';

interface IModalProductsProps {
  product: string;
  quantity: number;
  handleAdd: () => void;
  handleRest: () => void;
  handleRemove: () => void;
}

export default function ModalProducts({
  product,
  quantity,
  handleAdd,
  handleRest,
  handleRemove,
}: IModalProductsProps): JSX.Element {
  return (
    <>
      <div className="modal_body__items_container">
        <div className="modal_body__body--description">{product}</div>
        <div className="modal_body__body--aggregation">
          <p>{quantity}</p>
          <div>
            <button type="button" onClick={handleAdd}>
              +
            </button>
            <button type="button" onClick={handleRest}>
              -
            </button>
          </div>
        </div>
        <div className="modal_body__body--deleteall">
          <button type="button" onClick={handleRemove}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    </>
  );
}
