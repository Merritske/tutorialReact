import { Button, Container } from "react-bootstrap";
import Result from "./Result";


export default function CounterProject({recentNumber, clickHandler}) {
  return (
   <Container>
       <h1 className="text-center p-4">Counter Project</h1>

       
<div className="text-center">
     <Button variant="secondary" className="mx-1" onClick={(e)=>clickHandler(e, "inc")}>+</Button>
       <Button variant="dark" onClick={(e)=>clickHandler(e, "dec")} >-</Button>
     <Result number={recentNumber}/>
</div>
      
       </Container>
  )
}
