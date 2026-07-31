import Header from "./components/Header"
import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import "./css/App.css"
import { useState } from "react"


function App() {
 const [count, setCount] = useState(0)

 const onClickBtn = (value)=>{
  setCount(count + value)
 }


  return (
    <>
    <div className="App">
  <h1>simple Counter</h1>
  <section>
  <Viewer count={count}/>
  </section>
  <section>
  <Controller onClickBtn={onClickBtn}/>
  </section>
  </div>

    </>
  )
}

export default App
