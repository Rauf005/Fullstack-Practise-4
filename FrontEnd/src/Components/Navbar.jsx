import React from 'react'
import style from "./style.module.css"
import {Link,NavLink} from "react-router-dom"

function Navbar() {
  return (
   <div className={style.navbar}>
     <div className={style.nav}>
          <div className={style.navlogo}>
            <h1>Selling.</h1>
        
        </div>
        <div className={style.navlinks}>
          <ul>
          <NavLink className={style.aa}  to=""    style={({ isActive }) => {
              return isActive ? { color: "#BA470B" } : {};
            }} >
            <li>Home</li>
          </NavLink>
          <NavLink className={style.aa}  >
            <li>Products</li>
          </NavLink>
          <NavLink className={style.aa}  >
            <li>About Us</li>
          </NavLink>
          <NavLink className={style.aa}  >
            <li>Special</li>
          </NavLink>
          <NavLink className={style.aa} >
            <li>Testimonials</li>
          </NavLink>
          <NavLink className={style.aa} >
            <li>Blog</li>
          </NavLink>
          <NavLink className={style.aa}  to="/favorites" style={({ isActive }) => {
              return isActive ? { color: "#BA470B" } : {};
            }}>
            <li>Wishlist</li>
          </NavLink>

          </ul>
        
        </div>
        <div className={style.add}>
          <NavLink to="/add">
          <button>Add</button>
          </NavLink>
        
        </div>
        
    </div>
   </div>
  )
}

export default Navbar