import { configureStore } from "@reduxjs/toolkit";
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
import contactsReducer from "./contacts/slice";
import filterReduce from "./filters/slice";
import authReducer from './auth/slice';
import storage from 'redux-persist/lib/storage' ;
   
  const persistedReducer = persistReducer(
    {
        key: 'user-token',
        storage,
        whitelist:['token']
      }
    , authReducer)

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filterReduce,
        auth:persistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  
});

export const persistor = persistStore(store);