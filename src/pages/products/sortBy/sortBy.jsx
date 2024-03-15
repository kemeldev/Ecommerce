import useFiltersStore from '../../../store/filterstore';
import './sortBy.css'
import PropTypes from 'prop-types';

function SortBy ({isOpen}){

  const {setGlobalProducts, globalProducts } = useFiltersStore()

  const handleSortBy = (type) => {
    if (type === 'title') {
      const filteredProducts = globalProducts.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setGlobalProducts(filteredProducts)
    }
    if (type === 'maxprice') {
      const filteredProducts = globalProducts.sort((a, b) => {
        return b.price - a.price;
      });
      setGlobalProducts(filteredProducts)
    }
    if (type === 'minprice') {
      const filteredProducts = globalProducts.sort((a, b) => {
        return a.price - b.price;
      });
      setGlobalProducts(filteredProducts)
    }

    if (type === 'rank') {
      const filteredProducts = globalProducts.sort((a, b) => {
        return b.rating - a.rating;
      });
      setGlobalProducts(filteredProducts)
    }
  }
  return (
    <div className={`sortBy_mainContainer ${isOpen ? "sortByOpen" : "sortByClose"}`}>
      <div onClick={()=>handleSortBy("title")}>Name (A - Z)</div>
      <div onClick={()=>handleSortBy("maxprice")}>MAX - Price</div>
      <div onClick={()=>handleSortBy("minprice")}>MIN - Price</div>
      <div onClick={()=>handleSortBy("rank")}>Ranked Votes</div>
    </div>
  )
}
SortBy.propTypes = {
  isOpen: PropTypes.bool,
}
export default SortBy