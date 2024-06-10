// TODO: todoSlice 를 작성하세요.

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
