import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = ({tab, settab}) => {
  const handleonclick=(e)=>{
    settab(e);
  }
  return (
    <div style={{position: "fixed", zIndex: 1}}> 
      <div id='sidebar' className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "240px" ,height:"100vh"}}>
    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <svg className="bi pe-none me-2" width="40" height="32"><use xlinkhref:href="#bootstrap"></use></svg>
      <span className="fs-4">Social Chat</span>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" onClick={()=>{handleonclick("home")}}>
        {/* <a href="/" className={`nav-link text-white ${(tab==="home" && 'act' )}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkhref:href="#home"></use></svg>
          Home
        </a> */}
         <Link to="/" className={`nav-link text-white ${(tab==="home" && 'act' )}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkhref:href="#home"></use></svg>
          Home
        </Link>
      </li>
      <li>
        {/* <a href="/Create-Post" className={`nav-link text-white ${(tab!=="home" && 'act')}`} onClick={()=>{handleonclick("create post")}}  >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkhref:href="#speedometer2"></use></svg>
          Create Post
        </a> */}
          <Link to="/Create-Post" className={`nav-link text-white ${(tab!=="home" && 'act')}`} onClick={()=>{handleonclick("create post")}}  >
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkhref:href="#speedometer2"></use></svg>
          Create Post
        </Link>
      </li>
    </ul>
    <hr/>
    <div >

        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong className="me-auto">YOU</strong>
    </div>
  </div>
    </div>
  )
}

export default Sidebar
