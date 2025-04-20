import React from 'react';
import './Home.css';
import CountdownTimer from '../Component/CountdownTimer';
import Tshirt1 from '../assets/Tshirt1.jpg';
import Tshirt2 from '../assets/Tshirt2.jpg';
import Tshirt3 from '../assets/Tshirt3.jpg';


const Home = () => {
  const targetDate = "2025-04-20T00:00:00";
  return (
    <div className="home-wrapper">
      <div className="text-box">
        <p className="small-text">Cricket Fever? We got the Match bro!</p>
        <h1 className="main-text">
          TIME LEFT UNTIL OUR <span className="red">BIGGEST  <br /> SALE OF THE YEAR BEGINS..</span>
        </h1>
        </div>
         <CountdownTimer targetDate={targetDate} />
        <div className="tshirt-banner">
        <img src={Tshirt1} alt="Shopping banner" className="tshirt-img" />
        <button className="shop-btn">Shop Now</button>
      </div>
      <div className="black-friday-section">
        <div className="black-friday-text">
          <h2>Black Friday Exclusive</h2>
          <p>SAVE BIG:<span className='sp'>UPTO 40% OFF</span> ON TSHIRTS</p>
          <p>You can trust us to bring you the latest technology at unbeatable prices. Don’t miss this limited-time opportunity to upgrade your audio game.</p>
          <button className="shop-now-btn">Shop Now</button>

        </div>
        <div className="black-friday-image">
          <img src={Tshirt2} alt="Black Friday Exclusive" />
        </div>
        
      </div> 
       <div className="discount-announcement">
  <p className="discount-subtitle">Unbelievable Discounts Await You</p>
  <h2 className="discount-main-title">INFIQUENCY MADNESS IS HERE!</h2>
</div>

<div className="tshirt-card-section">
  <div className="tshirt-card">
    <img src={Tshirt3} alt="T-shirt"/>
    <p className="tshirt-name">T-shirt</p>
    <div className="tshirt-stars">★★★★★</div>
    <p className="tshirt-price">₹499</p>
    <button className="add-to-cart-btn">Add to Cart</button>

  </div>
  <div className="tshirt-card">
  <img src={Tshirt3} alt="T-shirt"/>
    <p className="tshirt-name">T-shirt</p>
    <div className="tshirt-stars">★★★★★</div>
    <p className="tshirt-price">₹499</p>
    <button className="add-to-cart-btn">Add to Cart</button>

  </div>
  <div className="tshirt-card">
  <img src={Tshirt3} alt="T-shirt"/>
    <p className="tshirt-name">T-shirt</p>
    <div className="tshirt-stars">★★★★★</div>
    <p className="tshirt-price">₹499</p>
    <button className="add-to-cart-btn">Add to Cart</button>

  </div>
  <div className="tshirt-card">
  <img src={Tshirt3} alt="T-shirt"/>
    <p className="tshirt-name">T-shirt</p>
    <div className="tshirt-stars">★★★★★</div>
    <p className="tshirt-price">₹499</p>
    <button className="add-to-cart-btn">Add to Cart</button>

  </div>
  
</div> 

<div className="headphone-banner">
  <div className="overlay-content">
    <h2>Limited-Time Offer</h2>
    <p className="headline">SAVE BIG:UP TO <span className="sp"> 60% OFF</span>  ON ALL LATEST TSHIRT</p>
    <p className="caption">Act Fast Before They're Gone</p>
    <button className="shop-now-btn">Shop Now</button>
  </div>
</div>
<div className="why-choose-section">
  <h2 className="why-heading">Why Choose Infiquency</h2>
  <p className="shopping-line">The Joy of <span className="sp">Shopping</span> Starts Here</p>
  <div className="why-cards">
    <div className="why-card">
      <h3>Secure Payments</h3>
      <p>Your financial safety is our top priority. All transactions are encrypted and go through trusted payment gateways to ensure complete security and peace of mind.</p>
    </div>
    <div className="why-card">
      <h3>Innovative Designs</h3>
      <p>We bring the latest fashion trends to your wardrobe. From minimal classics to bold statements, our designs are curated to reflect your unique style.</p>
    </div>
    <div className="why-card">
      <h3>Top Quality T-Shirts</h3>
      <p>Crafted with premium fabrics, our t-shirts offer unmatched comfort and durability. Perfect stitching and vibrant prints make them wardrobe essentials.</p>
    </div>
    <div className="why-card">
      <h3>Easy Returns & Free Delivery</h3>
      <p>Shopping made easy! Enjoy fast, free delivery and a hassle-free return policy. If you're not satisfied, returns are just a click away.</p>
    </div>
  </div>
 
</div>


<div className="testimonial-section">
  <div className="testimonial-overlay">
    <h2 className="testimonial-heading">What Our Client Says</h2>
    <p className="testimonial-subheading">CUSTOMER TESTIMONIALS</p>
    <div className="testimonial-content">
      <div className="testimonial-box left-review">
        <p>"I absolutely love the quality of t-shirts. The designs are trendy and the material is super comfortable!"</p>
        <span>- Rahul M.</span>
      </div>
      <div className="testimonial-box right-review">
        <p>"Fast delivery and great packaging. Will definitely shop again. Totally worth the price!"</p>
        <span>- Neha S.</span>
      </div>
    </div>
  </div>
</div>


    </div>
    
  );
};

export default Home;
