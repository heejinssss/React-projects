import { createContext, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './pages/Detail.js';
import Cart from './pages/Cart.js';
import { Routes, Route, Link, Router, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

export let Context1 = createContext()

// let Context1 = createContext() // state 보관함


function App() {

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [stock, setStock] = useState([10, 11, 12])

  return (
    <div className="App">

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link> */}
            {/* <Nav.Link onClick={()=>{ navigate(1) }}>앞으로</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(-1) }}>뒤로가기</Nav.Link> */}
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={ <div>
        
        <div className="main-bg"
          style={{ backgroundImage : 'url(./bg.png)' }}>
        </div>

        <div className="container">
          <div className="row">
            { 
              shoes.map(function(shoes, i) {
                return (
                  <div className="shoes" key={ i }>
                    <Card shoes={ shoes } i={ i } />
                  </div>
                )
              })
            }
          </div>
        </div>

        <button onClick={()=>{ 
          // 로딩 중 UI 띄우기
          console.log(count)
          setCount(count+1)
          count == 0
          ? (
            // json으로 데이터를 받은 후, axios 라이브러리가 array로 자동 변환
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((res)=>{
            console.log(shoes)
            console.log(res.data)
            let copy = [...shoes, ...res.data]; // {}, {}, {} 처럼 괄호를 벗김
            setShoes(copy)
          // 로딩 중 UI 숨기기
          }) // 서버에서 가져온 데이터

          // Promise.all([ axios.get('/test1'), axios.get('/test2') ])
          // .then(()=>{ // 위의 요청 2개가 모두 성공했을 때
          //   // 실행할 코드
          // })

          // fetch('https://codingapple1.github.io/shop/data3.json')
          // .then(결과=>결과.json()) // json을 array/object로 변환
          // .then(data=>{})

          // axios.post('/test', {name: 'Bae'})
          )
          : (
            axios.get('https://codingapple1.github.io/shop/data3.json')
            .then((res)=>{
            console.log(shoes)
            console.log(res.data)
            let copy = [...shoes, ...res.data]; // {}, {}, {} 처럼 괄호를 벗김
            setShoes(copy)
          })
          )

          .catch(()=>{
            // 로딩 중 UI 숨기기
            console.log('요청 실패') }) // 요청 실패시 실행
          }}>버튼</button>

        </div> } />

        <Route path="/detail" element={ <div><Detail /></div> } />
        
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ stock, shoes }}>
            <Detail shoes={ shoes } />
          </Context1.Provider>
        } />
        
        <Route path="/cart" element={ <Cart /> } />

        <Route path="*" element={ <div>404 not found</div> } />
      </Routes>

    </div>
  )
}

function Card(props) {
  return (

    <div>
      <img className="shoes" src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} style={{ width: "40%" }} alt="shoes" />
      <h4>{ props.shoes.title }</h4>
      <h5>{props.shoes.content }</h5>
      <h5>{ props.shoes.price }</h5>
    </div>
  )
}

export default App;
