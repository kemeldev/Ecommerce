import { Link } from 'react-router-dom'
import { facebook, instagram, twitter } from '../../assets/icons'
import { shoestoreLogoBlack } from '../../assets/images'
import './footer.css'
import useFiltersStore from '../../store/filterstore'

function Footer() {
  const { setGlobalFilters, setGlobalProducts } = useFiltersStore()
  const handleCategoryChange = (category) => {
    setGlobalFilters({ category, brand: 'all' })
    const filteredProducts = useFiltersStore.getState().productsList.filter(
      (product) => product.category === category
    )
    setGlobalProducts(filteredProducts)
  }

  const handleBrandChange = (brand) => {
    setGlobalFilters({ category: "all", brand: brand })
    const filteredProducts = useFiltersStore.getState().productsList.filter(
      (product) => product.brand === brand
    )
    setGlobalProducts(filteredProducts)
  }
  return (
    <>
      <footer className='footer_mainContainer'>
        <div className='footer_flexContainer'>

          <div className='footer_flexContainer_mainData'>
            <Link to="/Ecommerce">
              <div>
                <img src={shoestoreLogoBlack} alt="company log" />
              </div>
            </Link>
            
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
            <Link to="/Ecommerce/products">
            <p onClick={() => handleCategoryChange("outdoor")}>Outdoor</p>
            <p onClick={() => handleCategoryChange("training")}>Training</p>
            <p onClick={() => handleCategoryChange("running")}>Running</p>
            <p onClick={() => handleCategoryChange("tennis")}>Style</p>
            <p onClick={() => handleCategoryChange("football")}>Football</p>
            </Link>
          </div>

          <div className='footer_flexContainer_brands'>
            <h4>Brands</h4>
            <Link to="/Ecommerce/products">
            <p onClick={() => handleBrandChange("converse")}>Converse</p>
            <p onClick={() => handleBrandChange("adidas")}>Adidas</p>
            <p onClick={() => handleBrandChange("nike")}>Nike</p>
            <p onClick={() => handleBrandChange("under armour")}>Under Armour</p>
            </Link>
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
