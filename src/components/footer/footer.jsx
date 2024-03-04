import { facebook, instagram, twitter } from '../../assets/icons'
import { shoestoreLogo, shoestoreLogoBlack } from '../../assets/images'
import './footer.css'

function Footer() {

  return (
    <>
      <footer className='footer_mainContainer'>
        <div className='footer_flexContainer'>

          <div className='footer_flexContainer_mainData'>
            <div>
              <img src={shoestoreLogoBlack} alt="company log" />
            </div>
            <p>Get the best products and brands.</p> <p> Find deals and more</p>
            <div className='footer_social'>
              <div>
                <img src={facebook} alt="facebooklogo" />
              </div>
              <div>
                <img src={instagram} alt="instagram logo" />
              </div>
              <div>
                <img src={twitter} alt="twitter logo" />
              </div>
            </div>
          </div>

          <div className='footer_flexContainer_categories'>
            <h4>Categories</h4>
            <p>Outdoor</p>
            <p>Training</p>
            <p>Running</p>
            <p>Style</p>
            <p>Football</p>
          </div>

          <div className='footer_flexContainer_brands'>
            <h4>Brands</h4>
            <p>Converse</p>
            <p>Adidas</p>
            <p>Nike</p>
            <p>Under Armour</p>
          </div>

          <div className='footer_flexContainer_contact'>
            <h4>Get In Touch</h4>
            <p>kemel.developer@gmail.com</p>
            <p>(+506)8885-0715</p>
          </div>

        </div>
      </footer>
      
    </>
  )
}

export default Footer
