import style from './App.module.scss'
import {SideBar} from "./Components/SideBar/SideBar";
import {Main} from "./Components/Main/Main";
import {Slider} from "./Components/Slider/Slider";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className={style.container}>
    <SideBar/>
      <Routes>
        <Route path={'/'}  element={<Navigate to={'/Main'}/>}/>
        <Route path={'/Main'} element={<Main/> }/>
        <Route path={'/Slider'} element={<Slider/>}/>
        <Route path={'{/*'} element={<Error/>}/>
      </Routes>
    {/*  <Slider/>
      <Main/>*/}
    </div>
  )
}

export default App
