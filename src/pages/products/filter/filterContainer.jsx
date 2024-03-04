import { Accordion } from '../../../components/accordion'
import { brands, categories, promotions } from '../../../constants'
import './filterContainer.css'

function FilterContainer({isOpen}) {

  const filterBrands = brands
  const filterCategories = categories
  const filterPromotions = promotions

  return (
    <main className={`filter_mainContainer ${isOpen ? "filterOpen" : "filterClose"}`}>
      <div className="filter_content">
        <div className="filter_accordion">
          <Accordion title='Brands' content={filterBrands} />
        </div>
        <div className="filter_accordion">
          <Accordion title='Categories' content={filterCategories} />
        </div>
        <div className="filter_accordion">
          <Accordion title='Promotions' content={filterPromotions} />
        </div>
      </div>
    </main>
  )
}

export default FilterContainer
