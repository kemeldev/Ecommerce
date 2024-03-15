import { heroAdidas } from '../../../assets/images'
import './special.css'

function Special() {

  return (
    <>
      <div className='special_mainContainer'>
        <div className='special_content'>
          <div className='special_image'>
            <img src={heroAdidas} alt="adidas shoes" />
          </div>

          <div className='special_text'>
            <h2><strong>SPECIAL</strong>  OFFER</h2>
            <p>Create an account and get 40% of discount un your first pair of shoes</p>
            <div className='special_btns'>
              <button>
                Register Now
              </button>
            </div>
            
          </div>

        </div>
      </div>
      
    </>
  )
}

export default Special
