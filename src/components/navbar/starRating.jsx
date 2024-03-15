import './starRating.css'

function Star ({rating}) {

  const roundedRating = Math.ceil(rating * 10) / 10
  return(
    <div className='star_rating'>
      <i data-star={roundedRating} />
    </div>
  )
}

export default Star