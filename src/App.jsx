import { useState } from "react"
import {Sample}from "./component/Sample"


function App() {
  //const[name,setName] = useState("")
  //console.log(ame);
  const myName="hema"
  const myFrom ="nagappattinam"
  const myRead ="reading book"
  const[count,setCount]=useState(0)

  return (
    <>
    <h1> hello </h1> 

    <h1 className="text-30xl font-bold underline"> hello world</h1>
    <button onClick = {()=> setCount (count+1)}> count {count}</button>
    
    <Sample myName = {myName} myFrom = {myFrom} myRead = {myRead}/>
    </>
  )
}
export default App
