/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Card from '../../components/Card/Card';
import Layout from '../../components/Layout/Layout';
import Navbar from '../../components/Navbar/Navbar';
import ProductList from '../../components/ProductList/ProductList';
import { fetchProducts } from '../../features/products/actions/products';
import { addProduct } from '../../features/products/actions/cart';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import ModalBody from '../../components/Modalbody/ModalBody';
// import { getAllProductsSelector } from '../../features/products/selectors';

const Home: React.FC = () => {
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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const products = useAppSelector((state: any) =>
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

  return (
    <>
      <Layout
        navbar={<Navbar onClick={() => setModalIsOpen(!modalIsOpen)} />}
        body={<ProductList>{showTenProducts}</ProductList>}
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalBody />
      </Modal>
    </>
  );
};
export default Home;
