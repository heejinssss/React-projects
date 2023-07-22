import { useParams } from 'react-router-dom'

function Detail(props) {

  let {id} = useParams(); // 유저가 URL 파라미터에 입력한 값을 가져올 때
  let ids = Number(id)+1;

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + ids + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{ props.shoes[ids].title }</h4>
          <p>{ props.shoes[ids].content }</p>
          <p>{ props.shoes[ids].price }</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div>
  )
}

export default Detail;