import { useState } from 'react'
import Catalog from '../catalog/catalog'
import FilterContainer from '../filter/filterContainer'
import './list.css'
import SortBy from '../sortBy/sortBy'

function List() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)


  return (
    <>
      <div className='list_mainContainer'>

        <div className='list_title'>
          <h2>Now Showing Shoes</h2>
          <div className='list_filters'>
            <h4 onClick={() => setFilterOpen(!filterOpen)}>Filters</h4>
            <h4 onClick={() => setSortOpen(!sortOpen)}>Sort By</h4>
          </div>
        </div>
        <hr />

        <div className='list_productCatalog'>
          
          <FilterContainer
            isOpen={filterOpen} />
          <Catalog />
          <div className='list_sortBy'>
            <SortBy 
              isOpen={sortOpen} />
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default List
