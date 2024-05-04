import React from 'react'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({tab, settab}) => {
    const handleonclick=(e)=>{
    settab(e);
  }
  return (
    <div >
       <header className={`${styles.divsty} p text-bg-dark`}>
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
         <h1 className={styles.heading} >Social Verse</h1>
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
       
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header
