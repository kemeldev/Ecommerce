import { closeIcon } from '../../../assets/icons'
import './CartItem.css'

function CartItem() {

  return (
    <>
      <div className='cartItem_mainContainer'>
        <div className='cartItem_image'>
          <img src="https://assets.adidas.com/images/w_940,f_auto,q_auto/cd16ddc733aa4a378408afd200db5ecb_9366/GV9137_01_standard.jpg" alt="shoe details" />
        </div>
        <div className='cartItem_data'>
          <h4>Tennis title</h4>
          <p>$ 120.99</p>
          <h6>Size 12</h6>
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
          <div>
            <img src={closeIcon} alt="X sign to eliminate item" />
          </div>
        </div>

      </div>
    </>
  )
}

export default CartItem
