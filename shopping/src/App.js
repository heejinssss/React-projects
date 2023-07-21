import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import { Routes, Route, Link, Router, useNavigate, Outlet } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

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

      <div className="main-bg"
        style={{ backgroundImage : 'url(./bg.png)' }}>
      </div>

      <Routes>
        <Route path="/" element={ <div>첫 화면입니다.</div> } />
        <Route path="/detail" element={ <div><Detail /></div> } />
        <Route path="/about" element={ <div><About /></div> } />
        
        <Route path="/about" element={ <div><About /></div> }>
          <Route path="member" element={ <div>멤버</div> } />
          <Route path="location" element={ <div>위치</div> } />
        </Route>
        
        {/* <Route path="/about/member" element={ <div><About /></div> } />
        <Route path="/about/location" element={ <div><About /></div> } /> */}
        
        <Route path="*" element={ <div>404 not found</div> } />
      </Routes>

      {/* <div className="container">
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
      </div> */}
    </div>
  )
}

// function Card(props) {
//   return (
//     <div>
//       <img className="shoes" src={ props.shoes.url } style={{ width: "40%" }} alt="shoes" />
//       <h4>{ props.shoes.title }</h4>
//       <h5>{props.shoes.content }</h5>
//       <h5>{ props.shoes.price }</h5>
//     </div>
//   )
// }

export default App;
