import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import wishlistReducer from '@/features/wishlist/wishlistSlice';
import productsReducer from "@/features/products/productsSlice";
import cartReducer from '@/features/cart/cartSlice';

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  products: productsReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['wishlist'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export type AppStore = ReturnType<typeof makeStore>['store'];
export type AppPersistor = ReturnType<typeof makeStore>['persistor'];
export type RootState = ReturnType<typeof rootReducer>; 
export type AppDispatch = AppStore['dispatch'];