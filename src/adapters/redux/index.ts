import { configureStore } from '@reduxjs/toolkit';

import products from './products/slice';
import user from './user/slice';
import cart from './cart/slice';

export const store = configureStore({
  reducer: {
    products,
    user,
    cart,
  },
});
