import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
//counterSlice'taki `export const{...}`ifadesinden gelen increase fonksiyonu
import { decrease, increase, setCounter } from "../../state/counterSlice";



export default function Mainpage() {

    const counterState= useSelector (state=>state.counterState)
 
   const dispatch =useDispatch() 
return (
  <>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Counter</h1>
      <p class="fs-5 text-muted">let's make a counter using Redux-toolkit</p>
    </div>
    <Row className={"justify-content-center"}>
      <Col sm={4}>
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-white bg-primary border-primary">
            <h4 class="my-0 fw-normal">Counter</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title text-center">
              Counter: {counterState.counter}
            </h1>
            <button
                type="button"
                class="w-100 btn btn-lg btn-success mb-3"
                onClick={e=>dispatch(increase())}
            >
                + Increase
                </button>

            <button type="button" 
            class="w-100 btn btn-lg btn-danger"
            onClick={e=>dispatch(decrease())}
            >
              - Decrease
            </button>

            <button 
                type="button"
                class="w-100 btn btn-lg btn-secondary mt-3"
                onClick={e=>dispatch(setCounter(0))} 
             >
              Reset
            </button>
            <button 
            type="button" 
            class="w-100 btn btn-lg btn-secondary mt-3"
            onClick={e=>dispatch(setCounter(5))}
            >
              Equal 5
            </button>
          </div>
        </div>
      </Col>
    </Row>
  </>
);
}