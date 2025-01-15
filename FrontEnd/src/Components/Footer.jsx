import React from 'react'
import style from "./style.module.css"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import {Link,NavLink} from "react-router-dom"
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <div>
    <div className={style.footer}>
      <div className={style.about}>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p>
      </div>
      <div className={style.quick}>
        <h2>Quick Links</h2>
         <div className={style.lilili}>
         <Link className={style.ab}>About Us</Link>
         <Link  className={style.ab}>Services</Link>
         <Link  className={style.ab}>Testimonial</Link>
         <Link  className={style.ab}>Contact Us</Link>
         </div>
      
    </div>
    <div className={style.follow}>
      <h2>Follow Us</h2>
      <div className={style.icons}>
        <p><FaFacebookF /></p>
        <p><FaTwitter/></p>
        <p><FaLinkedinIn/></p>
        <p><FaInstagram/></p>

      </div>

      
    </div>
    <div className={style.featured}>
      <h2>Featured Product</h2>
      <div className={style.text}>
      <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg" alt="" />
      <p>Leather Brown Shoe</p>
      <b>$60.00</b>
      <button>ADD TO CART</button>
      </div>
    </div>
     
    </div>
     <div className={style.end}>
     <p>Copyright ©2025 All rights reserved | This template is made with < FaHeart/> by Colorlib</p>
   </div>
   </div>
  )
}

export default Footer