import { useState } from 'react'
import Catalog from '../catalog/catalog'
import FilterContainer from '../filter/filterContainer'
import './list.css'
import SortBy from '../sortBy/sortBy'
import useFiltersStore from '../../../store/filterstore'

function List() {
  const [filterOpen, setFilterOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  const {globalFilters} = useFiltersStore()

  const nowShowing = () => {
    if (globalFilters.category === 'all') return 'ALL PRODUCTS'
    else if (globalFilters.category === 'tennis') return 'TENNIS SHOES'
    else if (globalFilters.category === 'outdoor') return 'OUTDOOR SHOES'
    else if (globalFilters.category === 'football') return 'FOOTBALL SHOES'
    else if (globalFilters.category === 'training') return 'TRAINING SHOES'
    else return 'RUNNING SHOES'
  }

  const nowShowingBrand = () => {
    if (globalFilters.brand === 'all') return 'ALL'
    else if (globalFilters.brand === 'adidas') return 'ADIDAS'
    else if (globalFilters.brand === 'nike') return 'NIKE'
    else if (globalFilters.brand === 'converse') return 'CONVERSE'
    else if (globalFilters.brand === 'under armour') return 'UNDER ARMOUR'
    else return 'RUNNING SHOES'
  }

  return (
    <>
      <div className='list_mainContainer'>

        <div className='list_title'>
          <div>
            <h2>Now Showing:  {nowShowing()}</h2>
            <h3>Brand:  {nowShowingBrand()}</h3>
          </div>
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
