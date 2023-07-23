import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user_info',
  initialState: 'Bae'
})

let stock = createSlice({
  name: 'stock_info',
  initialState: [10, 11, 12]
})


// let id = createSlice({
//   name: 'id_info',
//   initialState: [0, 2]
// })

// let name = createSlice({
//   name: 'name_info',
//   initialState: ['White and Black', 'Grey Yordan']
// })

// let count = createSlice({
//   name: 'count_info',
//   initialState: [2, 1]
// })

let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] 
})

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    cart: cart.reducer
  }
}) 