import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({tab, settab}) => {
    const handleonclick=(e)=>{
    settab(e);
  }
  return (
    <div >
       <header className={`${styles.divsty} p-3 text-bg-dark`}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         <h1 className={styles.heading} >SOCIAL CHAT ✌️</h1>
    
       
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary ">Home</a></li>
            <li><a href="#" className="nav-link px-2 text-white">All Post</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Contact</a></li>
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
            <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
        </ul>
   <div className="text-end">
          <button type="button" onClick={()=>{handleonclick("home")}} className="btn
 btn12"><Link to="/" className={`nav-link text-white ${(tab==="home" && 'act' )}`} aria-current="page">
          <svg className="bi pe-none me-2" width="16" height="16"><use xlinkhref:href="#home"></use></svg>
          Home
        </Link></button>
          <button type="button" onClick={()=>{handleonclick("create post")}}  className="btn btn12"> <Link to="/Create-Post" className={`nav-link text-white ${(tab!=="home" && 'act')}`}  >
          <svg className={`${styles.mar} bi pe-none me-2`} width="16" height="16"><use xlinkhref:href="#speedometer2"></use></svg>
          Create
        </Link></button>
        </div>
        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header
