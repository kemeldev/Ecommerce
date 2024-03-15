import ButtonGeneral from '../../../components/buttonGeneral'
import './orderSummary.css'

export function OrderSummary () {
  return (
    <>
      
      <div className='summary_mainContainer'>
        <div className='summary_summary'>
          <h3>Order summary</h3>
          <div className='summary_amount'>
            <h4>Subtotal</h4>
            <p>$ 170</p>
          </div>
          <div className='summary_amount'>
            <h4>Discount</h4>
            <p>$ -50</p>
          </div>
          <div className='summary_amount'>
            <h4>Fees</h4>
            <p>$ 20</p>
          </div>
          <div className='summary_total'>
            <h4>Total</h4>
            <p>$ 140</p>
          </div>
          
        </div>

        <ButtonGeneral title="Procceed with payment" />
      </div>
        
    </>
  )
}

export default OrderSummary