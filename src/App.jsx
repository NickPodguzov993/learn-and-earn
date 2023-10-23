import style from './App.module.scss'
import {SideBar} from "./Components/SideBar/SideBar";
import {Main} from "./Components/Main/Main";



function App() {
  return (
    <div className={style.container}>
    <SideBar/>
      <Main/>
    </div>
  )
}

export default App
