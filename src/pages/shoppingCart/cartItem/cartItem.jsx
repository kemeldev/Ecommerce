import { closeIcon } from '../../../assets/icons'
import './CartItem.css'
import PropTypes from 'prop-types';
import useCartStore from '../../../store/cartStore';

function CartItem({title,size, price, image}) {
  const {removeFromCart} = useCartStore()

  return (
    <>
      <div className='cartItem_mainContainer'>
        <div className='cartItem_image'>
          <img src={image} alt="shoe details" />
        </div>
        <div className='cartItem_data'>
          <h4>{title}</h4>
          <p>$ {price}</p>
          <h6>Size {size}</h6>
          <h6>Amount</h6>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className='cartItem_remove'>
          <div onClick={()=> removeFromCart(title, size )}>
            <img src={closeIcon} alt="X sign to eliminate item" />
          </div>
        </div>

      </div>
    </>
  )
}

CartItem.propTypes = {
  title: PropTypes.string,
  size: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string ,
  
};

export default CartItem
