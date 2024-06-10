// TODO: result 상태와 덧셈, 뺄셈에 대한 상태변경 로직을 담은 slice를 만들어 보세요.
import { createSlice } from '@reduxjs/toolkit';

export const calculatorSlice = createSlice({
  name: 'result',
  initialState: {
    value: 0,
  },
  reducers: {
    plusHandle: (state, action) => {
      state.value += action.payload;
    },
    minusHandle: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { plusHandle, minusHandle } = calculatorSlice.actions;

export default calculatorSlice.reducer;
