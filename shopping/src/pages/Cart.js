import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increaseAge } from '../store/userSlice.js';

function Cart() {

  let state = useSelector((state)=>{ return state }) // Redux store에서 모든 state 가져옴
  console.log(state);
  let dispatch = useDispatch(); // store.js로 요청을 보내는 함수

//   // 중괄호와 return은 동시에 생략 가능
//   let state = useSelector((state)=> state ) // Redux store에서 모든 state 가져옴
//   console.log(state);

  let newState = useSelector((state)=>{ return state.user }) // Redux store에서 user state 가져옴

  return (
    <div>
    <h6>{state.user.age}살 { state.user.name }의 장바구니</h6>
    <button onClick={()=>{dispatch(changeName())}}>이름이 바뀌는 버튼</button>
    <button onClick={()=>{dispatch(increaseAge())}}>나이가 올라가는 버튼</button>
      <table>
        <Table>
        <thead>
          <tr>
          <th>#</th>
          <th>상품번호</th>
          <th>상품명</th>
          <th>재고</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((cart, i)=>
              <tr>
                <td>{ i }</td>
                <td>{ state.cart[i].id }</td>
                <td>{ state.cart[i].name }</td>
                <td>{ state.cart[i].count }</td>
                <td><button onClick={()=>{ }}>+</button></td>
              </tr>
            )
          }
        </tbody>
        </Table> 
      </table>
    </div>
  )
}

export default Cart;
