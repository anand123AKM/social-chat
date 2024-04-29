import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../header';
import Footer from '../footer';
import './App.css';
import  {Outlet} from "react-router-dom";
import PostlistPrivider from '../poststore';

const App = () => {
  
const [tab,settab]= useState("home");
  return (
  <PostlistPrivider>
    <div className='c'>
    <div className='c1 main-content'>
       <Header tab={tab} settab={settab} ></Header>
       <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </div>
  </PostlistPrivider>
  )

}

export default App
