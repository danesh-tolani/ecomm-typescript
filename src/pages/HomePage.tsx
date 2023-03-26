import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Product from "../components/Product";
import { ProductData } from "../shared/type";


type Props = {
  currentCategory: string
}

const HomePage = ({currentCategory}: Props) => {


const [products, setProducts] = useState<ProductData[]>([]);

const productsapi = async () => {
  if (currentCategory !== "") {
    const data = await axios.get(`https://fakestoreapi.com/products/category/${currentCategory}`)
    setProducts(data.data)
  }
  else {
    const data = await axios.get("https://fakestoreapi.com/products")
    setProducts(data.data)
  }
};

useEffect(() => {
  productsapi();
}, [currentCategory]);
  
// console.log(products)
// console.log(categories)


  return (
    <div>
      <Hero/>
      <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-5 relative top-16">
        {products.map((product, index: number) => {
          return (
            <div key={index} className="w-[350px]">
              <Product productDetails = {product}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage