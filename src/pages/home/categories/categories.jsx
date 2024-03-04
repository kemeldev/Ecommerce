import { categoryFootball, categoryRunning, categoryStyle, categoryTraining } from '../../../assets/images'
import './categories.css'

function Categories() {
  const categoryImages = [{title : "Footbal", image: categoryFootball }, {title : "Running", image: categoryRunning }, {title : "Training", image: categoryTraining }, {title : "Style", image: categoryStyle }]

  return (
    <>
      <div className='category_mainContainer'>

        <h2>BE PART OF</h2>

        <div className='category_List'>
          {categoryImages.slice(0,4).map((category, index) => (
            <div className='category_gridElement' key={index}>
              <img src={category.image} alt={category.title} />
              <div className='category_gridElementContent'>
                <h3>{category.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className='category_flexList'>

        </div>
        
      </div>
      
    </>
  )
}

export default Categories
