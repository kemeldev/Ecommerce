import './sortBy.css'

function SortBy ({isOpen}){
  return (
    <div className={`sortBy_mainContainer ${isOpen ? "sortByOpen" : "sortByClose"}`}>
      <div>Name (A - Z)</div>
      <div>MAX - Price</div>
      <div>MIN - Price</div>
      <div>Ranked Votes</div>
    </div>
  )
}

export default SortBy