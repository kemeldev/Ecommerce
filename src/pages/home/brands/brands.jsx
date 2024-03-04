import './brands.css'
import { logoAdidas, logoConverse, logoNike, logoUnderArmour } from '../../../assets/images'

  

function Brands() {
  const brandsImages = [logoAdidas,logoConverse, logoNike, logoUnderArmour]

  return (
    <>
      <div className='brands_mainContainer'>
        <h2>BRANDS WE LOVE</h2>
        <div className='brands_List'>
          {brandsImages.map((brand, index) => (
            <div className='brands_gridElement' key={index}>
              <img src={brand} alt="brand Logo" />
            </div>
          ))}
        </div>
        
      </div>
      
    </>
  )
}

export default Brands
