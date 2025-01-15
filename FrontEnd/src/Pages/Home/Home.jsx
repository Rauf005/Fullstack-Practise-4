import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";

function Home() {
  return (
    <div>
            <div className='shop'>
                <img src="" alt="" />
                <div className='shop-texts'>
                    <h1>Shop With Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                    <div className='shop-buttons'>
                        <div className='btn-one'><button >SHOP NOW</button></div>
                        <div className='btn-two'><button >CLUB MEMEBERSHIP</button></div>
                    </div>
                </div>
            </div>
            <div className='products'></div>
            <div className='about'>
                <div className='about-img'>
                    <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
                    <div className='merchant'><h1>Trusted Merchant</h1><p>FOR 50 YEARS</p></div>
                </div>
                <div className='about-text'>
                    <h3 style={{ color: "gray" }}>Merchant Company</h3>
                    <h1>About Us</h1>
                    <p style={{ color: "gray" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className='leadership'>
                <div className='leadership-text'>
                    <p style={{ color: "gray" }}>TEAM</p>
                    <h1>Leadership</h1>
                </div>
                <div className='leadership-cards'>
                    <div className='l-card'>
                        <img style={{ width: "70%" }} src="https://preview.colorlib.com/theme/selling/images/person_2.jpg" alt="" />
                        <h3 style={{ color: "gray" }}>John Rooster</h3>
                        <p style={{ color: "gray" }}>Co-Founder, President</p>
                        <p style={{ color: "gray" }}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                        <div className='l-icons'>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaInstagram /></p>
                        </div>
                    </div>
                    <div className='l-card'>
                        <img style={{ width: "70%" }} src="https://preview.colorlib.com/theme/selling/images/person_3.jpg" alt="" />
                        <h3 style={{ color: "gray" }}>John Rooster</h3>
                        <p style={{ color: "gray" }}>Co-Founder, President</p>
                        <p style={{ color: "gray" }}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                        <div className='l-icons'>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaInstagram /></p>
                        </div>
                    </div>
                    <div className='l-card'>
                        <img style={{ width: "70%" }} src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" alt="" />
                        <h3 style={{ color: "gray" }}>John Rooster</h3>
                        <p style={{ color: "gray" }}>Co-Founder, President</p>
                        <p style={{ color: "gray" }}>Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
                        <div className='l-icons'>
                            <p><FaFacebook /></p>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaInstagram /></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Home