import { Link } from 'react-router-dom'
import ButtonGeneral from '../../../components/buttonGeneral'
import './summary.css'
import useCartStore from '../../../store/cartStore'

function Summary() {
  const {cartList}= useCartStore()

  const subtotalAmount = cartList.reduce((accumulator, currentObject) => {
    return accumulator + currentObject.price;
  }, 0);
  const fees = 20
  const discountApplied = 50
  const totalAmount = subtotalAmount+fees-discountApplied


  return (
    <>
      <div className='summary_mainContainer'>
        
        <div className='summary_summary'>
          <h3>Order summary</h3>
          <div className='summary_amount'>
            <h4>Subtotal</h4>
            <p>$ {subtotalAmount}</p>
          </div>
          <div className='summary_amount'>
            <h4>Discount</h4>
            <p>$ - {discountApplied}</p>
          </div>
          <div className='summary_amount'>
            <h4>Fees</h4>
            <p>$ {fees}</p>
          </div>
          <div className='summary_total'>
            <h4>Total</h4>
            <p>$ {totalAmount.toFixed(2)}</p>
          </div>
          
        </div>
        <div className='summary_btn'>
          <Link to="/checkout">
            <ButtonGeneral title="Procced with Checkout" />
          </Link>
        </div>
        
      </div>
        
    </>
  )
}

export default Summary
