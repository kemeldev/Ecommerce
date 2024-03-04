import { useEffect, useState } from 'react'
import './hero.css'
import { heroAdidas, heroConverse, heroNike } from '../../../assets/images'

function Hero() {
  const heroImages = [heroAdidas, heroConverse, heroNike]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imageActive, setImageActive] = useState(true)


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
      
      setImageActive(true); // Set active for 2 seconds
      setTimeout(() => {
        setImageActive(false); // Set inactive for 0.5 seconds
      }, 2000);
      setTimeout(() => {
        setImageActive(true); // Set active again for remaining 0.5 seconds
      }, 2500);
    }, 2500);

    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  

  return (
    <>
      <main className='hero_mainContainer'>

        <div className='hero_content'>

          <div className='hero_content_text'>
            <p>EXPRESS YOUR STYLE SOMETHING THAT MATTERS</p>
            <button className='hero_showNowBtn'>
              SHOP NOW
            </button>
          </div>

          <div className="carousel_mainSlider">
          {heroImages.map((image,index) => (
            <img  
              key={index}
              src={image} 
              className={ imageActive ? "carousel_image_slider active" : "carousel_image_slider notActive"}
              style={{translate: `${-100 * currentImageIndex}%`}}
              alt="carousel of project images" 
            />
          ))}
          
        </div>

        </div>
        
      </main>
      
    </>
  )
}

export default Hero