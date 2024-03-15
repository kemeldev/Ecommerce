import { Link } from 'react-router-dom'
import { categoryFootball, categoryRunning, categoryStyle, categoryTraining } from '../../../assets/images'
import useFiltersStore from '../../../store/filterstore'
import './categories.css'
import { useEffect } from 'react'

function Categories() {
  const categoryImages = [
    {title : "football", image: categoryFootball,},
    {title : "running", image: categoryRunning },
    {title : "training", image: categoryTraining },
    {title : "style", image: categoryStyle }]

  const { setGlobalFilters, setGlobalProducts, globalFilters  } = useFiltersStore()
  const handleCategoryChange = (category) => {
    setGlobalFilters({ category, brand: 'all' })
    const filteredProducts = useFiltersStore.getState().productsList.filter(
      (product) => product.category === category
    )
    setGlobalProducts(filteredProducts)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <>
      <div className='category_mainContainer'>

        <h2>BE PART OF</h2>

        <div className='category_List'>
          {categoryImages.slice(0,4).map((category, index) => (
            
            <Link to={"/products"} key={index}>
            <div className='category_gridElement' onClick={()=> handleCategoryChange(category.title)}>
              <img src={category.image} alt={category.title} />
              <div className='category_gridElementContent'>
                <h3>{category.title}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>

        <div className='category_flexList'>

        </div>
        
      </div>
      
    </>
  )
}

export default Categories
