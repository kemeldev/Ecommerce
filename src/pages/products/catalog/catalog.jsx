import './catalog.css'
import ShoeData from '../../../components/shoeData'
import useFiltersStore from '../../../store/filterstore';
import { Link } from 'react-router-dom';

function Catalog() {
  const {globalProducts} = useFiltersStore()

  return (
    <>
      <div className='catalog_mainContainer'>
        <div className='catalog_grid'>
          {
            globalProducts.map(product => (
              <Link
                  to={`/details/${product.id}`}
                  key={product.id}
                  state={product}
                        >
              <ShoeData
                key={product.id}
                title={product.title}
                image={product.thumbnail}
                price={product.price}
                brand={product.brand}
                discount={product.discountPercentage}
            />
            </Link>
            ))
          }
        </div>
        
      </div>
      
    </>
  )
}

export default Catalog
