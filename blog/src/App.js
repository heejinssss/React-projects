/* eslint-disable */

import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'
  let [제목, 제목수정] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
  let [따봉, 따봉추] = useState(0)
  let [뉴따봉, 뉴따봉추] = useState([0, 0, 0])
  let [modal, setModal] = useState(false)
  let [number, changeNumber] = useState(0)
  let [입력값, 입력값수정] = useState('')
  let [새글, 새글수정] = useState('')
  let [새날짜, 새날짜수정] = useState('')

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button className="btn" onClick={()=>{
        let copy = [...제목] /* 괄호를 벗긴 후 다시 입힘, 완전히 새로운 state로 간주 */
        copy[0] = '여자 코트 추천'
        제목수정(copy)
      }}>첫번째 글 제목 바꾸기</button>

      <button className="btn" onClick={()=>{
        let copy = [...제목]
        copy = copy.sort()
        제목수정(copy)        
      }}>ㄱㄴㄱ순 정렬</button>

      {
        제목.map(function(title, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={(e)=>{ e.stopPropagation(); setModal(!modal); changeNumber(i) }}>{ title } <span onClick={()=>{
                              {
                                let copy = [...뉴따봉]
                                copy[i] = copy[i]+1
                                뉴따봉추(copy)
                              }
                            }}>❤️</span>
              { 뉴따봉[i] }
              </h4>
              <p>2월 22일 발행</p>
              <button onClick={()=>{
                let copy = [...제목];
                copy.splice(i, 1) // 원하는 자료 삭제
                제목수정(copy);
              }}>삭제</button>

            </div>
          )
        })
      }

      <input onChange={(e)=>{{ 입력값수정(e.target.value); console.log(입력값) }}}></input>

      <button onClick={()=>{
        let copy = [...제목];
        copy.unshift(입력값); // array의 0번째 index에 입력값 추가
        제목수정(copy);
      }}>글 작성</button>
      
      {
        modal == true
          ? <Modal color={ "yellow" } 제목={제목} 제목수정={제목수정} number={number} />
          : null
      }

    </div>
  )
}

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{ props.제목[props.number] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
      {
        let copy = [...props.제목]
        copy[0] = '여자 코트 추천'
        props.제목수정(copy)
      }
      }}>글 수정</button>
    </div>
  )
}

/*
class Modal2 extends React.Component { // class : 변수, 함수 보관 가능
  constructor(){ // props 들어가는 자리
    super(); // props 들어가는 자리
    this.state = {
      name : 'Bae',
      age : 20
    }
  }
  render(){
    return (
      <div>{ this.state.name }
        <button onClick={()=>{
          this.setState({ name : '버튼 눌림' })
        }}>버튼</button>
      </div>
    )
  }
}
*/

export default App
