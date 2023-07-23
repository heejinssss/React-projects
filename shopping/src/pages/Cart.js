import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {

  let state = useSelector((state)=>{ return state }) // Redux store에서 모든 state 가져옴
  console.log(state);
//   // 중괄호와 return은 동시에 생략 가능
//   let state = useSelector((state)=> state ) // Redux store에서 모든 state 가져옴
//   console.log(state);

  let newState = useSelector((state)=>{ return state.user }) // Redux store에서 user state 가져옴

  return (
    <div>
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
