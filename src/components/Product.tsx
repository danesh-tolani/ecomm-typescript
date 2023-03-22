import { ProductData } from "../shared/type"
import {BsPlus, BsEyeFill} from "react-icons/bs"
import { Link } from "react-router-dom"

type Props = {
    productDetails: ProductData
}

const Product = ({productDetails}: Props) => {
  return (
    <>
      <div className=" h-[300px] w-[300px] md:h-[300px] md:w-[300px] mb-4 relative overflow-hidden group transition border">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
          <img src={productDetails.image} alt={productDetails.title} className="max-h-[160px] group-hover:scale-110 transition duration-300 p-4" />
          </div>
        </div>

        {/* buttons */}
        <div className="absolute top-6 -right-8 group-hover:right-3 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center text-white w-8 h-8 bg-red-500 ">
              <BsPlus className="text-3xl"/>
            </div>
          </button>
          <Link to={`/product/${productDetails.id}`} className="w-8 h-8 bg-white flex justify-center items-center text-primary drop-shadow-xl">
            <BsEyeFill/>
          </Link>
        </div>

        {/* title and price */}
      </div>
        <div className="flex gap-y-1 flex-col">
          <div className="text-xs capitalize text-gray-500">{productDetails.category}</div>
          <Link to={`/product/${productDetails.id}`}>
            <h2 className="font-semibold mb-1 text-xs">{productDetails.title}</h2>
          </Link>
          <h2 className="text-xs font-semibold">{productDetails.price}</h2>
        </div>
    </>
  )
}

export default Product