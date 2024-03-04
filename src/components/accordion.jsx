import { useState } from 'react'
import useFiltersStore from '../store/filterstore'
import './accordion.css'

// eslint-disable-next-line react/prop-types
export function Accordion ({ title, content }) {
  const [accordionOpen, setAccordionOpen] = useState(false)

  const { globalFilters, setGlobalFilters, productsList, setGlobalProducts, globalProducts } = useFiltersStore()

  const handleFilterChange = (item) => {
    if (title === 'Brands') {
      setGlobalFilters({ category: 'all', brand: item })
      const filteredProducts = productsList.filter((product) => product.brand === item)
      setGlobalProducts(filteredProducts)
    }
    if (title === 'Categories') {
      setGlobalFilters({ category: item, brand: 'all' })
      const filteredProducts = productsList.filter((product) => product.category === item)
      setGlobalProducts(filteredProducts)
    }
    if (title === 'Promotions') {
      setGlobalFilters({ category: 'all', brand: 'all' })
      const filteredProducts = productsList.filter((product) => product.discountPercentage >= 30)
      setGlobalProducts(filteredProducts)
    }
    // console.log(title)
    // console.log('filters', globalFilters)
    // console.log('globalProducts', globalProducts)
  }

  return (
    <div className='accordion-container'>
      <button onClick={() => setAccordionOpen(!accordionOpen)} className='accordion-button'>
        <span>{title}</span>
        <svg
          className='accordion-icon'
          width='16'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform transition ${accordionOpen ? 'rotate-minus-180' : ''}`}
          />
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform rotate-90 transition ${accordionOpen ? 'rotate-minus-180' : ''}`}
          />
        </svg>
      </button>


      <div className={`accordion-content ${accordionOpen ? 'open' : ''}`}>
        {content.map((item) => (
          <div
            key={item}
            className='accordion-item'
            onClick={() => handleFilterChange(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
