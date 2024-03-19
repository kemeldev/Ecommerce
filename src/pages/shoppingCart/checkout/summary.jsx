import './summary.css'
import useCartStore from '../../../store/cartStore'
import { useAuth } from '../../../context/AuthContext'

function Summary() {
  const {cartList}= useCartStore()
  const {isLoggedIn} = useAuth()

  const subtotalAmount = cartList.reduce((accumulator, currentObject) => {
    return accumulator + (currentObject.price * currentObject.amount);
  }, 0);
  const cheepestPair = () => {
    if (cartList.length > 0) {
      return cartList.reduce((min, current) => current.price < min.price ? current : min)
    } else {
      return {price :0};
    }
  };

  const fees = 0
  const discountApplied = Number((cheepestPair().price * .4).toFixed(2))
  const totalAmount = subtotalAmount+fees-discountApplied

  return (
    <>
      <div className='summary_mainContainer'>
        
        <div className='summary_summary'>
          <h3>ORDER SUMMARY</h3>
          <div className='summary_amount'>
            <h4>Subtotal</h4>
            <p>$ {subtotalAmount}</p>
          </div>
          <div className='summary_amount'>
            <h4>Discount (Special Offer *)</h4>
            {isLoggedIn ? <p>$ - {discountApplied}</p> : `$ 0` }
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
        
        
      </div>
        
    </>
  )
}

export default Summary
