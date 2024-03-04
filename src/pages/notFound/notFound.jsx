import { notFound } from '../../assets/images'
import './notFound.css'

function NotFound() {

  return (
    <>
      <div className='notFound_mainContainer'>
        <div className='notFound_image'>
          <img src={notFound} alt="not found image" />
        </div>
      </div>
      
    </>
  )
}

export default NotFound