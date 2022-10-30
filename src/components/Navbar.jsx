import * as React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../logo.png"
import { useDispatch, useSelector } from 'react-redux'
import {LogOut, reset} from '../features/AuthSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)
  console.log(user);
  const Logout = () =>{
    
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");

  }

  return (
    <div>
      <nav className="navbar is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/dashboard" className="navbar-item">
            <img src={Logo} alt="logo" width="30" height="100" /> <h1 style={{fontWeight:"bold"}}>Prod-smart.com</h1>
          </NavLink>     
          <a href="!#" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={Logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;