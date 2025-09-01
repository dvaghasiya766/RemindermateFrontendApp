import { Tuple, combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import Auth from './Auth';
import { MMKVStorage } from './MmkvStorage';
import Locations from './Locations';

const persistConfig = {
  key: 'root',
  storage: MMKVStorage,
  whitelist: ['Auth'],
};

const rootReducer = combineReducers({
  Auth,
  Locations,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: () => {
    if (__DEV__) {
      const middleware = new Tuple(logger);
      return middleware;
    }
    return new Tuple();
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
