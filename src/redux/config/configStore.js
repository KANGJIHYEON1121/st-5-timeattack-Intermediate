import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../slices/todoSlice';

// TODO: store 셋업하고 slice에서 import한 reducer를 할당하세요.
const store = configureStore({
  reducer: { todos: todoSlice },
});

export default store;
