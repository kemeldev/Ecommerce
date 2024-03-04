import ButtonGeneral from '../../../components/buttonGeneral'
import './checkout.css'

function Checkout() {

  return (
    <>
      
      <div className='checkout_mainContainer'>
        <div className='checkout_summary'>
          <h3>Order Summay</h3>
          <div>
            <h4>Subtotal</h4>
            <p>$ xxx amout</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>$ xxx amout</p>
          </div>
          
          
        </div>

        <ButtonGeneral title="Procced with checkout" />
      </div>
        
    </>
  )
}

export default Checkout
