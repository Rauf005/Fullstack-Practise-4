import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {Helmet} from "react-helmet";
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { favoriteContext } from '../../Context/FavoriteContext';

function Home(product) {
    let {favorite,setFavorite}=useContext(favoriteContext)
    let [searchQuery, setSearchQuery] = useState('')
    let [products,setProducts]=useState([])
    function getData(){
      axios.get("http://localhost:3000/sellings")
      .then((res)=>{
        setProducts(res.data)
      })
    }
    useEffect(()=>{
       getData()
    },[])
    function handleSearch(event) {
        setSearchQuery(event.target.value)
      }
      const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      function handleAddFavorite(product){
        let findFavorite= favorite.find(item=>item._id==product._id)
    
        if(findFavorite){
           alert("Bu mehsul wishlistde movcuddur")
        }else{
           setFavorite([...favorite,product])
           alert("Məhsul wishlistə əlavə edildi")
        }
     }

  return (
    <div>
      <Helmet>
        <title>Home </title>
      </Helmet>
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
            <div className='products'>
                <h1>Our Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae <br /> nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut <br /> consequatur laboriosam ipsam.</p>
                <form action="">
          <input style={{marginBottom:"10%"}} value={searchQuery}  onChange={handleSearch} className="search" type="text" placeholder='Search'/>
        </form>
                <div className='productcards'>
                { filteredProducts.map(product=>(
                <div className='productcard' key={product._id}>
                
                    <img src={product.image} alt="" />
                    <div className="producttext">
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <div className="btns">
                        <button onClick={()=>handleAddFavorite(product)} className='btnh'><FaHeart /></button>
                        <button className='btnv'>VIEW</button>
                        </div>
                    </div>
                </div>
                ))}
               
                </div>
            </div>
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