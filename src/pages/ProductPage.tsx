import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AppDispatch, AppState } from "../app/store"
import Footer from "../components/Footer"
import cartSlice from "../features/cartSlice"
import {ProductData} from "../shared/type"

type Props = {}

const ProductPage = (props: Props) => {

  // const [product, setProduct] = useState(undefined)

  const {id} = useParams()
  // console.log(id)
  
  const [product, setProduct] = useState<ProductData>();

const productapi = async () => {

  const data = await axios.get(`https://fakestoreapi.com/products/${id}`)
  setProduct(data.data)

};

useEffect(() => {
  productapi();
}, [id]);
  
// console.log(product)

const dispatch: AppDispatch = useDispatch();
const handleClick = () => {
  if(product) {
    dispatch(cartSlice.actions.addToCart(product))
  }
}

if(!product){
  return <section className="h-screen flex justify-center items-center ">Loading...</section>
}

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper */}
        <div className="flex flex-col lg:flex-row items-center ">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm " src={product.image} alt={product.title} />
          </div>

          {/* text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] ">{product.title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">$ {product.price}</div>
            <p className="mb-8 px-5 md:px-0">{product.description}</p>
            <button onClick={() => handleClick()} className="bg-primary py-4 px-8 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage