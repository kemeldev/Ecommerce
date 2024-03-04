import ButtonGeneral from '../../../components/buttonGeneral'
import { sizes } from '../../../constants'
import './shoeDetails.css'

function ShoeDetails() {

  return (
    <>
      <main className='shoeDetail_mainContainer'>
        <div className='shoeDetail_topData'>

          <div className='shoeDetail_mainImg'>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b03da702-3839-40f9-9fec-a1f0eec55915/calzado-de-skateboarding-sb-zoom-blazer-mid-lCFcxG.png" alt="shoe image title" />
          </div>

          <div className='shoeDetail_content'>
              <h1>Tennis Title</h1>
              <p>Shoes description Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit molestias in sed quo veritatis explicabo tenetur, beatae eius iste officia temporibus odit rem deserunt blanditiis similique aliquam? Eius, reiciendis iste.</p>
              <p>$ Price</p>
              <div>Starts with rating</div>
              <h3>Size Selection</h3>
              <div className='shoeDetail_sizesGrid'>
                {sizes.map(size => (
                  <div key={size}>
                    {size}
                  </div>
                ))}
              </div>
              <ButtonGeneral title={"Add to cart"} />

            </div>
          </div>

          

          <div className='shoeDetail_otherImgs'>
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/946227e2-4196-457f-8e27-27021de5f0a0/calzado-de-skateboarding-sb-zoom-blazer-mid-lCFcxG.png" alt="shoe second images" />
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/83a18f2e-b010-4679-b772-1d36c7d15f1f/calzado-de-skateboarding-sb-zoom-blazer-mid-lCFcxG.png" alt="shoe second images" />
            <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ed51b54-7e67-40b9-adef-b54367619b59/calzado-de-skateboarding-sb-zoom-blazer-mid-lCFcxG.png" alt="shoe second images" />
          </div>
        </main>
    </>
  )
}

export default ShoeDetails
