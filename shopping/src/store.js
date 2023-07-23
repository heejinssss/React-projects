import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';

// let user = createSlice({
//   name: 'user_info',
//   initialState: { name: 'Kim', age: 20 },
//   reducers: {
//     changeName(state) {
//       state.name = 'Bae' // Immer.js
//     },
//     increaseAge(state) {
//       state.age = state.age + 1
//     }
//     // , 함수2() {

//     // }
//   }
// })

// export let { changeName } = user.actions // destructuring 문법
// // export let { 함수1, 함수2, 함수3, ... } = user.actions
// export let { increaseAge } = user.actions // destructuring 문법

let stock = createSlice({
  name: 'stock_info',
  initialState: [10, 11, 12]
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}  
  ],
})

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
})
