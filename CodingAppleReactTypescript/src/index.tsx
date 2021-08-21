import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

interface Counter {
  count: number;
  user: string;
}

// const 초기값 :Counter  = { count: 0 };
const initialState: Counter = { count: 0, user: 'kim' };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: any) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

// function reducer(state = initialState, action: any) {
//   if (action.type === 'increase') {
//     return { count: state.count + 1 };
//   } else if (action.type === '감소') {
//     return { count: state.count - 1 };
//   } else {
//     return initialState;
//   }
// }

// const store = createStore(reducer);

// store의 타입 미리 export 해두기
export type RootState = ReturnType<typeof store.getState>;

export let { increment, decrement, incrementByAmount } = counterSlice.actions;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
