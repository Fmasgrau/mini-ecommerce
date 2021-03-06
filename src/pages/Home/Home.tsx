/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';
import ProductList from '../../components/ProductList/ProductList';
import { fetchProducts } from '../../features/products/actions/products';
import {
  addProduct,
  deleteProduct,
  removeProduct,
} from '../../features/products/actions/cart';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import ModalBody from '../../components/Modalbody/ModalBody';
import ModalProducts from '../../components/Modalbody/ModalProducts';

const Home: React.FC = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const cartProducts = useAppSelector((state: any) => state.cart.products);

  const QuantityProducts = cartProducts.reduce(
    (quantity: any, current: any) => quantity + current.quantity,
    0
  );

  const handleDisabled = () => {
    if (QuantityProducts > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    handleDisabled();
  }, [cartProducts]);

  function closeModal() {
    setModalIsOpen(false);
  }

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const addOneItem = (data: any) => {
    dispatch(addProduct({ ...data }));
  };

  const deleteOneItem = (data: any) => {
    dispatch(deleteProduct(data));
  };

  const removeItem = (data: any) => {
    dispatch(removeProduct(data));
  };

  const handleCheckout = () => {
    history.push('/checkout');
  };

  const products = useAppSelector((state: any) =>
    // I can't get just a few items from the API so I decided to make this slice
    state.products.products.slice(250, 280)
  );

  const showTenProducts = products.map((res: any) => (
    <Card
      key={res.tail}
      title={res.character}
      imgSrc={res.image}
      imgAlt={res.name}
      price={1.5}
      onClick={() =>
        dispatch(
          addProduct({
            id: res.tail,
            name: res.name,
            imgSrc: res.image,
            price: 1.5,
            quantity: 1,
          })
        )
      }
      buttonText="Add to cart"
      type={res.type}
    />
  ));

  const showModalProducts = cartProducts.map((p: any) => (
    <ModalProducts
      key={p.id}
      product={p.name}
      quantity={p.quantity}
      handleAdd={() => addOneItem({ ...p })}
      handleRest={() => deleteOneItem(p.id)}
      handleRemove={() => removeItem(p.id)}
    />
  ));

  const TotalProduct = cartProducts.reduce(
    (price: any, current: any) => price + current.price * current.quantity,
    0
  );

  return (
    <>
      <Layout
        navbar={
          <Navbar
            onClick={openModal}
            icon={
              <>
                <i className="fa fa-shopping-cart" />
                <span>{QuantityProducts}</span>
              </>
            }
            isEnabled={modalIsOpen}
            modalbody={
              <ModalBody
                header="List of products"
                total={TotalProduct}
                checkout={handleCheckout}
                disabled={isDisabled}
              >
                {cartProducts.length > 0 ? (
                  showModalProducts
                ) : (
                  <div className="modal_body__no_items">No items to show</div>
                )}
              </ModalBody>
            }
          />
        }
        body={
          <>
            <ProductList>
              {products?.length > 0 ? showTenProducts : <div>No data</div>}
            </ProductList>
          </>
        }
      />
    </>
  );
};
export default Home;
