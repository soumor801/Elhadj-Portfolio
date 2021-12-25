import Product from '../product/Product'
import './productList.css'
import { products } from '../../data'

const ProductList = () => {
  return (
    <div className="pl">
      <div className='pl-texts'> 
        <h1 className='pl-title'>Create & Inspire. </h1>
        <p className='pl-desc'>Built and deployed Projects:</p>
      </div>
      <div className='pl-list'>
        {products.map((i) => (
          <Product key={i.id} img={i.img} link={i.link}/>

        ))}
       
      </div>
    </div>
  )
}

export default ProductList
