/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-modal';
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
// import { getAllProductsSelector } from '../../features/products/selectors';

const Home: React.FC = () => {
  const history = useHistory();

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setModalIsOpen(false);
  }

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

  // const customStyles = {
  //   content: {
  //     width: 600,
  //     display: 'flex',
  //     justifyContent: 'center',
  //     top: '9%',
  //     left: '50%',
  //     // right: '5%',
  //     // // bottom: '10%',
  //     // // marginRight: '-50%',
  //     // // transform: 'translate(-50%, -50%)',
  //     // paddingRigth: 1,
  //     // paddingBottom: 10,
  //   },
  // };

  const products = useAppSelector((state: any) =>
    state.products.products.slice(250, 280)
  );

  const cartProducts = useAppSelector((state: any) => state.cart.products);

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

  const QuantityProducts = cartProducts.reduce(
    (quantity: any, current: any) => quantity + current.quantity,
    0
  );

  return (
    <>
      <Layout
        navbar={
          <Navbar
            onClick={() => setModalIsOpen(!modalIsOpen)}
            quantity={QuantityProducts}
            isEnabled={modalIsOpen}
            modalbody={
              <ModalBody
                header="List of products"
                total={TotalProduct}
                checkout={handleCheckout}
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
            <ProductList>{showTenProducts}</ProductList>
          </>
        }
      />
    </>
  );
};
export default Home;
