import { useEffect, useState } from 'react';
import ButtonGeneral from '../../../components/buttonGeneral'
import { sizes } from '../../../constants'
import './shoeDetails.css'
import PropTypes from 'prop-types';
import Star from '../../../components/navbar/starRating';
import useCartStore from '../../../store/cartStore';


function ShoeDetails({details}) {
  const [selectedSize, setSelectedSize] = useState(null);
  const {addToCart, cartList, sizeError} = useCartStore()

  const object = {...details, size: selectedSize}

  console.log(cartList);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <main className='shoeDetail_mainContainer'>
        <div className='shoeDetail_topData'>

          <div className='shoeDetail_mainImg'>
            <img src={details.thumbnail} />
          </div>

          <div className='shoeDetail_content'>
              <h1>{details.title}</h1>
              <p>{details.description}</p>
              <div className='shoeDetail_rating'>
                <p>Rating: </p>
                <Star rating={details.rating}/>
              </div>
              <p className='shoeDetail_price'>$ {details.price}</p>
              <h3>Size Selection</h3>

              <div className='shoeDetail_sizesGrid'>
                {sizes.map((size, index )=> (
                  <div
                    key={size}
                    className={`sizeItem ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </div>
                ))}
              </div >
              
              <div className="shoeDetail_sizeError">
              {sizeError && sizeError}
              </div>
              
              <div onClick={() => {
                  addToCart(object);
              }}>
                <ButtonGeneral               
                  title={"Add to cart"} 
                />
              </div>
              

            </div>
          </div>

          

          <div className='shoeDetail_otherImgs'>
            {details.images.map ((image, index) => (
              <div key={index} className='shoeDetail_otherImgs_img'>
                <img src={image} alt="image of shoe" />
              </div>
            ))}
          </div>
        </main>
    </>
  )
}

ShoeDetails.propTypes = {
  details: PropTypes.object,
  
};

export default ShoeDetails
