import React from 'react';
import './ProductList.scss';

interface IProductListProps {
  children: JSX.Element;
}

export default function ProductList({
  children,
}: IProductListProps): JSX.Element {
  return <div className="product__container">{children}</div>;
}
