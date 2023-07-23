import { useParams } from 'react-router-dom'
import styled from 'styled-components'

let YelloBtn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => props.bg == 'blue' ? 'white' : 'black' }; // bg가 blue이면 fontColor가 white, 아니면 black
  padding: 10px;
  `

let BlackBox = styled.div`
  background: grey;
  padding: 20px;
  `

let NewBtn = styled(YelloBtn)` // 버튼 템플릿 재활용
  `

function Detail(props) {

  let {id} = useParams(); // 유저가 URL 파라미터에 입력한 값을 가져올 때
  let ids = Number(id)+1;
  console.log(ids)

  return (
    <div className="container">
      <BlackBox>
        <YelloBtn bg="green">버튼</YelloBtn>
        <YelloBtn bg="blue">버튼</YelloBtn>
        <NewBtn bg="pink">버튼</NewBtn>
      </BlackBox>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + ids + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ props.shoes[id].title }</h4>
          <p>{ props.shoes[id].content }</p>
          <p>{ props.shoes[id].price }</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;