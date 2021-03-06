/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import FormCheckout from '../../components/Form/FormCheckout';
import Input from '../../components/Input/Input';
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { deleteAllCart } from '../../features/products/actions/cart';
import {
  regexCardPattern,
  regexExpireDatePattern,
} from '../../utils/FormValidation';

export default function Checkout() {
  const history = useHistory();
  const dispatch = useAppDispatch();

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

  const handleBack = () => {
    history.push('/');
  };

  const cartProducts = useAppSelector((state: any) => state.cart.products);

  const TotalProduct = cartProducts.reduce(
    (price: any, current: any) => price + current.price * current.quantity,
    0
  );

  const checkoutSchema = yup.object().shape({
    card_number: yup
      .string()
      .matches(regexCardPattern, 'Card number must be valid')
      .required('Card number is required'),
    card_holder: yup.string().required('Card holder is required'),
    expire_date: yup
      .string()
      .matches(regexExpireDatePattern, 'Expire date must be valid')
      .required(),
    cvc: yup.string().required('Cvc is a required field'),
  });

  const onSubmitCheckout = () => {
    checkoutSchema
      .validate({
        card_number: cardNumber,
        card_holder: cardHolder,
        expire_date: expireDate,
        cvc: cvc,
      })
      .then((valid) => {
        if (valid) {
          localStorage.removeItem('state');
          dispatch(deleteAllCart());
          Swal.fire({
            title: 'Transaction completed',
            icon: 'success',
            width: 600,
            padding: '3em',
            background: '#fff',
            backdrop: `
              #5ed2db50
              left top
              no-repeat
            `,
            confirmButtonColor: '#5ed2db',
            confirmButtonText: 'Go home',
          }).then((isConfirmed) => {
            if (isConfirmed) {
              history.push('/');
            }
          });
        }
      })
      .catch((e) => {
        Swal.fire({
          title: e.errors[0],
          icon: 'error',
          width: 600,
          padding: '3em',
          background: '#fff',
          backdrop: `
            #5ed2db50
            left top
            no-repeat
          `,
          confirmButtonColor: '#5ed2db',
          confirmButtonText: 'Close',
        });
      });
  };

  return (
    <Layout
      navbar={
        <Navbar
          onClick={handleBack}
          icon={
            <>
              <i className="fa fa-home" />
            </>
          }
        />
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
