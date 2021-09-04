/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import FormCheckout from '../../components/Form/FormCheckout';
import Input from '../../components/Input/Input';
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';
import { useAppSelector } from '../../state/hooks';

export default function Checkout() {
  const history = useHistory();

  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [cvc, setCvc] = useState('');

  const handleCardNumber = ({ target }: any) => {
    setCardNumber(target.value);
  };

  const handleCardHolder = ({ target }: any) => {
    setCardHolder(target.value);
  };

  const handleExpireDate = ({ target }: any) => {
    setExpireDate(target.value);
  };

  const handleCvc = ({ target }: any) => {
    setCvc(target.value);
  };

  const cartProducts = useAppSelector((state: any) => state.cart.products);

  const TotalProduct = cartProducts.reduce(
    (price: any, current: any) => price + current.price * current.quantity,
    0
  );

  const QuantityProducts = cartProducts.reduce(
    (quantity: any, current: any) => quantity + current.quantity,
    0
  );

  const checkoutSchema = yup.object().shape({
    card_number: yup.string().required(),
    card_holder: yup.string().required(),
    expire_date: yup.string().required(),
    cvc: yup.string().required(),
  });

  const onSubmitCheckout = () => {
    checkoutSchema
      .isValid({
        card_number: cardNumber,
        card_holder: cardHolder,
        expire_date: expireDate,
        cvc: cvc,
      })
      .then((valid) => {
        if (valid) {
          Swal.fire({
            title: 'Transaction completed',
            icon: 'success',
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
              #5ed2db50
              url("/images/nyan-cat.gif")
              left top
              no-repeat
            `,
            confirmButtonColor: '#5ed2db',
            confirmButtonText: 'Go to home',
          }).then((isConfirmed) => {
            if (isConfirmed) {
              history.push('/');
            }
          });
        }
      });
  };

  return (
    <Layout
      navbar={
        <Navbar onClick={() => history.push('/')} quantity={QuantityProducts} />
      }
      body={
        <FormCheckout
          price={TotalProduct}
          number={
            <Input
              label="Card number"
              id="card_number"
              type="text"
              className="input"
              maxLength={16}
              placeholder="1234 1234 1234 1234"
              onChange={handleCardNumber}
              value={cardNumber}
            />
          }
          holder={
            <Input
              label="Card holder"
              id="card_holder"
              type="text"
              className="input"
              maxLength={16}
              placeholder="Facundo Masgrau"
              onChange={handleCardHolder}
              value={cardHolder}
            />
          }
          expire={
            <Input
              label="Expire date"
              id="expire_date"
              type="text"
              className="input"
              maxLength={16}
              placeholder="MM/YY"
              onChange={handleExpireDate}
              value={expireDate}
            />
          }
          cvc={
            <Input
              label="CVC"
              id="cvc"
              type="text"
              className="input"
              maxLength={4}
              placeholder="333"
              onChange={handleCvc}
              value={cvc}
            />
          }
          handleClick={onSubmitCheckout}
        />
      }
    />
  );
}
