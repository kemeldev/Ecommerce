import { products as productsData} from '../../../productsData/productsData.json'
import ShoeData from '../../../components/shoeData'
import './favourites.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Favourites({title}) {
  const [popularProducts, setPopularProducts] = useState([])
  // Function to generate a random number between 0 and max (exclusive)
  function getRandomNumber (max) {
    return Math.floor(Math.random() * max)
  }

  // Function to get an array of 5 unique random items
  function getRandomItems (array, count) {
    const randomItems = []

    while (randomItems.length < count) {
      const randomIndex = getRandomNumber(array.length)
      const selectedItem = array[randomIndex]

      // Make sure the selected item is not already in the randomItems array
      if (!randomItems.includes(selectedItem)) {
        randomItems.push(selectedItem)
      }
    }

    return randomItems
  }
   // Get 5 random items
   const randomProducts = getRandomItems(productsData, 6)

  useEffect(() => {
    setPopularProducts(randomProducts)
  }, [])


  return (
    <>
      <div className='favourite_mainContainer'>
        <h2>{title}</h2>

        <div className='favourite_List'>
          {popularProducts.map((product) => (
            <Link
              to={`/Ecommerce/products/details/${product.id}`}
              key={product.id}
              state={product}
                  >
            <ShoeData
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              price={product.price}
              brand={product.brand}
              discount={product.discountPercentage}
            />
            </Link>
          ))}
        </div>
        


      </div>
      
    </>
  )
}

export default Favourites

