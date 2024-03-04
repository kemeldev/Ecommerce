import { useEffect, useState } from 'react'
import './shoeData.css'
  

// eslint-disable-next-line react/prop-types
function ShoeData({title, image, price, brand, discount}) {

  const [hasDiscount, setHasDiscount] = useState(true)

  const priceWithDiscount = (price * (1 - (discount/100))).toFixed(2);

  useEffect(() => {
    if (discount >= 30) {
      setHasDiscount(true);
    } else {
      setHasDiscount(false);
    }
  }, [discount]);

  return (
    <>
      <div className='shoeData_mainContainer'>
        <div className='shoeData_image'>
          <img src={image} alt={brand} />
        </div>
        <h3>{title}</h3>
        <h4>{brand}</h4>
        {hasDiscount ? (
          <div className='shoeData_priceContainer'>
          <h4>$ {price}</h4>
          <div className='shoeDataDiscount' />
            <h4>$ {priceWithDiscount}</h4>
          </div>
        ) :  (<div>
          <h4>$ {price}</h4> </div>)}  
      </div>
      
    </>
  )
}

export default ShoeData
