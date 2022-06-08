import React from 'react';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { deleteFromCart } from '../../redux/slices/cartSlice';

import style from './CartPreview.module.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { Link } from 'react-router-dom';

export const CartPreview = () => {
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart.cart);
  const previewCartWindow = useSelector((state) => state.cart.previewCart);

  const deleteProductFromCart = (id) => {
    dispatch(deleteFromCart(id));
  };

  return (
    <>
      {previewCartWindow && (
        <div className={style.root}>
          <ul className={style.ul}>
            {productsInCart.map((products) => (
              <li key={nanoid()} className={style.list}>
                <HighlightOffIcon
                  onClick={() => deleteProductFromCart(products.id)}
                  sx={{ cursor: 'pointer', mr: 2 }}
                />
                <img src={products.image} alt='image' className={style.image} />
                <Box className={style.info}>
                  <Box className={style.title}>{products.title}</Box>
                  <Box className={style.price}>{products.price} грн</Box>
                  <Link to='/cart' className={style.link}>
                    <Button variant='contained' size='small' sx={{ display: 'block', m: '0 auto' }}>
                      Купити
                    </Button>
                  </Link>
                </Box>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
