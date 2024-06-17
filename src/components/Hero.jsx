const HeroSection = () => {
 return(
    <main className="hero container">
      <div className="hero-contant">
         <h1>YOUR FEET DESERVE THE BEST</h1>
         <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU   
         </p>
      
      <div className="hero-btn">
         <button>Shop Now</button>
         <button className="secondry-btn">Category</button>
      </div> 
      <div className="shopping">
         <p>Also Avalible On</p>
      </div> 
      <div className="shop-img">
         <img src="/images/flipkart.png" alt="flipkart" />
         <img src="/images/amazon.png" alt="amazon" />
      </div>
      </div>
      <div className="hero-image">
         <img src="/images/shoe_image.png" alt="hero-image" />
      </div>
    </main>
 );

};
export default HeroSection;