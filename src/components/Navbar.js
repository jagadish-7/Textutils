import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



export default function Navbar(props) {




  return (
    <>
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

        </ul>

        <div className="pallete">

          <input type="color" id='myColor' />
          <button type="button" id='myCheckbox' className='btn btn-primary mx-2' onClick={props.changeColor}>Change Theme</button>
        </div>

        <div class="form-check form-switch mx-2">
              <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={props.toggleMode}/>
              <label class={`form-check-label text-${props.mode ==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
   </> 
  )


}


Navbar.propTypes = {
    title:PropTypes.string,

}

Navbar.defaultProps = {
    title:"TextUtils"
}

