import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/AuthReducer';
import { albumReducer } from './reducers/AlbumReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    alBum:albumReducer
  },
});
