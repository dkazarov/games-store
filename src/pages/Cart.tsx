import React from 'react';

import { nanoid } from 'nanoid';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Container, Box } from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';
import { clearCart, cartSelector } from '../redux/slices/cartSlice';

import { Header } from '../components/Header/Header';
import { ClearCart } from '../components/ClearCart/ClearCart';
import { CartItem } from '../components/CartItem/CartItem';
import { CartIcon } from '../components/EmptyCart/EmptyCart';
import { TotalCart } from '../components/TotalCart/TotalCart';

import { ICart } from '../@types/types';

import style from '../components/ClearCart/ClearCart.module.scss';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);

  const clearAllProductInCart: () => void = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <Header />
      {cart.length ? (
        <Container maxWidth='lg' sx={{ position: 'relative' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: 36,
              color: 'white',
              mb: 5,
              maxHeight: 50,
            }}>
            <h4 className={style.title}>
              Кошик
              <ShoppingCartIcon className={style.cart_icon} color='warning' />
            </h4>
            <Box className={style.root} onClick={clearAllProductInCart}>
              <ClearCart />
            </Box>
          </Box>
          {cart.map((products: ICart) => (
            <CartItem {...products} key={nanoid()} />
          ))}
          <TotalCart />
        </Container>
      ) : (
        <Container>
          <CartIcon />
        </Container>
      )}
    </>
  );
};
