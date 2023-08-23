// import React from 'react'
import main from './images/main.jpg';
import Data from "./Data";
import styles from './images/styles.gif';
import shoe from './images/shoe.png';

import bag from './images/bag.png'
import EndImage from "./EndImage";
import NewArrivals from './images/NewArrivals.png';
import BestSeller from './images/BestSeller.png';
import Hotsales from './images/Hotsales.png';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <>
    <div className='main'>
      

    <div className='image-container'>
      <img src={main} alt='' className='image1' />
      <div className='text-container'>
          <p className='collection-text'>
            <span className='summer'> Summer </span> 
            <span className='collection'>  Collection </span></p>
            <div className='headings'>
              <h2>Fall-Winter Collection  2023</h2>
              <div className='headi3'>
              <p>"Shop It: Your Gateway to Fashion and Style. Discover a curated collection of trendy clothing that caters to your unique taste and elevates your wardrobe to new heights."</p>
              
              <button className='shop-button'>
              <Link to="/services" style={{ textDecoration: 'none',color:'white' }}>
                Shop Now
              </Link>
                <span className='arrow'>&rarr;</span>
              </button>
              </div>
              
            </div>
           
              </div>
             

      
        </div>
        <div className='main-container'>
      <div className='images'>
        <img src={styles} alt="" className='fimage' />
        </div>
        {/* <h1 className='content'> */}
        {/* <span className='clothing' > Clothing </span> 
            <span className='collect'> Collection 2023   </span></h1>
        {/* <div className='Fpara'>
        <p className='withincontent'>"Welcome to Shop It, your ultimate destination for an exceptional shopping experience. At Shop It, we believe that shopping isn't just about acquiring products; it's about embracing your unique style and expressing yourself. Our platform offers a curated selection of top-notch products, from trendy clothing to stylish accessories. With a commitment to quality and an eye for the latest trends, we invite you to embark on a shopping journey that goes beyond transactions. Dive into the art of shopping with Shop It, where every click leads to new possibilities, and every choice tells your story. Explore, discover, and redefine your shopping experience with us."</p></div> */} 
            <div className='bag'>
            <img src={bag} alt="" className='bagimg'/>
            <div className='hotdeal'>
              <span>Sale Of</span>
              <h5>$29.99</h5>
            </div>
            </div>
            <div className='bag-content'>
              <div className='deal'><h3>DEAL OF THE WEEK</h3></div>
              <h2>Multi-pocket Chest Bag Black </h2>
            </div>
            <div className='clock'>
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          
            </div>
            
          

      
      <div className='simage'>
        <img src={shoe} alt="" className='gimage' />
      </div>
      {/* <div className='timage'>
        <img src={shoe} alt="" className='shoeimg' />
        

      </div> */}
      <div className='shcont'>
          <h1> <em style={{color:"#e43c09"}}>Shoe</em> 
          <span className='spring'> Spring 2023 </span> </h1>

        </div>
    </div>
   
      
        </div>
        
    <img src={NewArrivals} alt="" className="arrimages1" />
    <div className='product-container'>
      
      <Data rating={4.5} imge={"https://gant.com/dw/image/v2/BFLN_PRD/on/demandware.static/-/Sites-gant-master/default/dwf2e5d003/pim/202204/234100/110/202204-234100-110-flat-fv-1.jpg?sw=650"} price={"$98"} tittle={"Original T-Shirt"}/>
      <Data rating={4} imge={"https://www.exportleftovers.com/cdn/shop/products/DSC_3595_1_1200x.jpg?v=1641221199"} price={"$198"} tittle={"WOMEN'S SALEENA DENIM COLLAR JACKET"} />
      <Data rating={4} imge={"https://images.prismic.io/sportsshoesprod/190e0097-67f9-45e3-a80e-9a9dc46e5c03_Tile+-++Merrell+Wrapt+Hiker.png?auto=compress,format&rect=0,0,1000,1000&w=1000&h=1000"} price={"$198"} tittle={"Shoes & Boots for Men's"} />
     
      </div>
      <img src={BestSeller} alt="sa" className="arrimages"  />
      <div className='product-container'>
      <Data rating={3.5} imge={"https://static-01.daraz.pk/p/26c9b86d6a96f2e506826919e5ef7b2c.jpg"} price={"$198"} tittle={"Combo of 2 Rings & 1 Chain Bracelet For Men _ New Collection"} />
      <Data rating={4.5}imge={"https://5.imimg.com/data5/SELLER/Default/2022/12/ZY/IZ/UQ/71802998/gold-plated-kundan-and-crystal-long-jewellery-swt-with-earring-1000x1000.jpeg"} price={"$198"} tittle={"Gold Plated Crystal Necklace Jewellery Set with Earrings for Women"} />
      <Data rating={5}imge={"https://media.istockphoto.com/id/855095958/photo/womens-clothing-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=IU2y7Y7Q0kvAiCv3lxP1peiTkx1-dmp_7yPGSZIozjw="} price={"$198"} tittle={"Women's Wear Autumn"} />
      </div>
      <img src={Hotsales} alt="" className="arrimages"  />
      <div className='product-container'>
      <Data rating={2}imge={"https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8="} price={"$198"} tittle={"Summer Brown Dress, Suede Wedg"} />
      <Data rating={3} imge={"https://shopgroove.pk/cdn/shop/products/IMG-20221128-WA0009.jpg?v=1669639165&width=360"} price={"$198"} tittle={"Men's Hoodies"}/>
      <Data rating={3} imge={"https://ae01.alicdn.com/kf/H1c7a35e307bc4bc4a50806f3bf89fa4dq/ZWTY-Women-s-Denim-Jacket-With-Rivet-Spring-Autumn-Streetwear-Long-Sleeve-Pockets-Ladies-Jean-Jackets.jpg"} price={"$198"} tittle={"WOMEN'S SALEENA DENIM COLLAR JACKET"} />
      
    </div>
    <EndImage/>
      
       </>
  )
}

export default Home
