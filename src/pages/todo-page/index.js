import { Button, Col, Form, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../state/todoSlice";

export default function TodoPage() {

  const todoState =useSelector(state=>state.todoState)
  const dispatch = useDispatch()
    console.log('>>todoState', todoState)
  return (
    <>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal">TODO example</h1>
        <p class="fs-5 text-muted">let's make a TODO APP using Redux-toolkit</p>
      </div>
    <Form onSubmit={event=>{
      event.preventDefault()
      console.log('>>onSubmit params ', event.target)
      

      
//HTML from elemanını doğrudan JSON objesine çeviriyoruz. Bu yöntemle tekrar render problemi yaşanmaz. performans artar 
      const formData= new FormData(event.target);
      const formValueJson = Object.fromEntries(formData.entries());

     console.log('>>Form value json', formValueJson) 

     dispatch(addTodo(formValueJson))
      
    }}>
      <Row>
        <Col sm={4}>
        <Form.Group>
          <Form.Label>
            Todo Title
          </Form.Label>
          <Form.Control type="text" name="title" 
            />
          </Form.Group>
          </Col>
          <Col sm={2}>
            <Form.Group>
              <Form.Label> Is it done?</Form.Label>
              <Form.Check name="done" valur="1"/>
            </Form.Group>
          </Col>
          <Col sm={3}>
              <Button type="submit" className="mt-4">ADD Todo</Button>   
          </Col>
      </Row>
      </Form>

      <Table>
        <thead>
          <tr>
           <th>ID</th>
            <th>Title</th>
            <th> Done?</th>
            <th>Process</th>
          </tr>
        </thead>
        <tbody>
           {todoState.todos.map((item,index)=>{
            return(
               <tr key= {index} >
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>
                <input type="checkbox" checked={item.done} />
              </td>
              <td>
                <Button variant="primary" className="me-2">
                  Revise
                </Button>
                <Button 
                onClick={event=>dispatch(deleteTodo(index))}
                variant="danger">Delete</Button>
              </td>
            </tr>)
           })}
           
          
        
        </tbody>
      </Table>
    </>
  );
}
