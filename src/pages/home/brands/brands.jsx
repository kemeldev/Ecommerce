import './brands.css'
import { logoAdidas, logoConverse, logoNike, logoUnderArmour } from '../../../assets/images'
import useFiltersStore from '../../../store/filterstore'
import { Link } from 'react-router-dom'

  

function Brands() {
  const brands = [
    {img: logoAdidas, brand: "adidas"},
    {img: logoConverse, brand: "converse"},
    {img: logoNike, brand: "nike"},
    {img: logoUnderArmour, brand: "under armour"},]
    
  const { setGlobalFilters, setGlobalProducts} = useFiltersStore()

  const handleBrandChange = (brand) => {
    setGlobalFilters({ category: "all", brand })
    const filteredProducts = useFiltersStore.getState().productsList.filter(
      (product) => product.brand === brand
    )
    setGlobalProducts(filteredProducts)
  }

  return (
    <>
      <div className='brands_mainContainer'>
        <h2>BRANDS WE LOVE</h2>
        <div className='brands_List'>
          {brands.map((brand, index) => (
            <Link to="/products" key={index}>
              <div className='brands_gridElement' onClick={() => handleBrandChange(brand.brand)}>
                <img src={brand.img} alt="brand Logo" />
              </div>
            </Link>
          ))}
        </div>
        
      </div>
      
    </>
  )
}

export default Brands
