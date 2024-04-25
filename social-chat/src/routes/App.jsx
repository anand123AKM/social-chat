import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../header';
import Footer from '../footer';
import Sidebar from '../sidebar';
import './App.css';
import CreatePost from '../post';
import Postlist from '../postlist';
import  {Outlet} from "react-router-dom";
import PostlistPrivider from '../poststore';

const App = () => {
  
const [tab,settab]= useState("home");
  return (
  <PostlistPrivider>
    <div className='c'>
          <Sidebar tab={tab} settab={settab}></Sidebar>
    <div className='c1 main-content'>
       <Header></Header>
       {/* {tab === "home" ? (<Postlist></Postlist>):   (  <CreatePost></CreatePost>)} */}

       <Outlet></Outlet>
      <Footer></Footer>
    </div>
    </div>
  </PostlistPrivider>
  )

}

export default App
