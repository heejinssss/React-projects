import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, Router } from 'react-router-dom';

function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={ <div>메인페이지</div> } />
        <Route path="/detail" element={ <div>상세페이지</div> } />
      </Routes>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
    </div>
  )
}

function Card(props) {
  return (
    <div>
      <img className="shoes" src={ props.shoes.url } style={{ width: "40%" }} alt="shoes" />
      <h4>{ props.shoes.title }</h4>
      <h5>{props.shoes.content }</h5>
      <h5>{ props.shoes.price }</h5>
    </div>
  )
}

export default App;
