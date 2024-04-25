import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top foot12">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><FaTwitter />
</svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="https://www.instagram.com/?hl=en"><svg className="bi" width="24" height="24"><FaInstagram /></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><FaGithub /></svg></a></li>
    </ul>
  </footer>
    </div>
  )
}

export default Footer
