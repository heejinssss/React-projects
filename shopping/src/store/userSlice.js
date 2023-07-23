import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user_info',
  initialState: { name: 'Kim', age: 20 },
  reducers: {
    changeName(state) {
      state.name = 'Bae' // Immer.js
    },
    increaseAge(state) {
      state.age = state.age + 1
    }
    // , 함수2() {

    // }
  }
})

export let { changeName } = user.actions // destructuring 문법
// export let { 함수1, 함수2, 함수3, ... } = user.actions
export let { increaseAge } = user.actions // destructuring 문법

export default user;
