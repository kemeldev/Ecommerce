import './catalog.css'
import { products as productsData} from '../../../productsData/productsData.json'
import ShoeData from '../../../components/shoeData'

function Catalog() {

  return (
    <>
      <div className='catalog_mainContainer'>
        <div className='catalog_grid'>
          {
            productsData.map(product => (
              <ShoeData
                key={product.id}
                title={product.title}
                image={product.thumbnail}
                price={product.price}
                brand={product.brand}
                discount={product.discountPercentage}
            />
            ))
          }
        </div>
        
      </div>
      
    </>
  )
}

export default Catalog
