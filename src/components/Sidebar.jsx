import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import {IoPerson, IoPricetag, IoHome, IoLogOut, IoPersonCircleSharp} from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import {LogOut, reset} from '../features/AuthSlice'

const Sidebar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {user} = useSelector((state) => state.auth)
  const Logout = () =>{
    
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");

  }
  return (
    <div>
      <aside className="menu has-shadow pl-4">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><NavLink to="/dashboard" ><IoHome /> Dashboard</NavLink></li>
          <li><NavLink to="/products" ><IoPricetag /> Products</NavLink></li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">
              Admin
            </p>
            <ul className="menu-list">
              <li><NavLink to="/users" ><IoPerson /> Users</NavLink></li>
            </ul>           
          </div>
        )}
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li>
          <button className='button'><IoPersonCircleSharp /> Edit</button>
          </li>
          <li>
          <button onClick={Logout} className='button'><IoLogOut /> Logout</button>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar