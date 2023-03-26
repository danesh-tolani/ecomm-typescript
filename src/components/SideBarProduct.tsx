import { ProductData } from "../shared/type"
import { BsFileMinus, BsFilePlus} from "react-icons/bs"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import cartSlice from "../features/cartSlice";
import { AppDispatch } from "../app/store";
import { useState } from "react";

import {IoMdAdd, IoMdClose, IoMdRemove} from "react-icons/io"

type Props = {
    item: ProductData
}

const SideBarProduct = ({item}: Props) => {
 const {id, title, image, price, quantity} = item;

    let [newQuantity, setNewQuantity] = useState<number>(1)
    
    const dispatch: AppDispatch = useDispatch();
    const handleIncrease = () => {
      setNewQuantity(newQuantity !== null ? (newQuantity => newQuantity + 1) : 0)
      dispatch(cartSlice.actions.setQuantity({id: item.id, quantity: newQuantity + 1}))
      // console.log(newQuantity, item.price)
  }
    const handleDecrease = () => {
      setNewQuantity(newQuantity !== null ? (newQuantity => newQuantity - 1) : 0)
      dispatch(cartSlice.actions.setQuantity({id: item.id, quantity: newQuantity - 1}))
      if (newQuantity === 1) {
        dispatch(cartSlice.actions.removeItem(id))
      }
  }

  const handleRemove = () => {
    dispatch(cartSlice.actions.removeItem(id))
  }


  
    return (
      <>
        <div className="flex gap-x-4 items-center py-2 lg:px-6 border-b border-gray-200 w-[400px] md:w-[450px] font-light text-gray-500 ">

          {/* image */}
          <div className="">
            <img className="max-w-[60px]" src={image} alt={title} />
          </div>

          {/* Every thing else */}
          <div className=" w-full">
            <div className=" flex justify-between items-center mb-2">
              <div className="text-sm uppercase font-medium max-w-[300px] text-primary hover:underline ">
                {title}
              </div>
            {/* remove button */}
              <div>
                <IoMdClose className="text-gray-500 hover:text-red-500 transition" onClick={handleRemove}/>
              </div>
            </div>

            {/* prices */}
            {/* qty */}
            <div className="flex gap-x-2 h-[36px] ">
              <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                {/* minus icon */}
                <div onClick={handleDecrease} className="flex-1 flex justify-center items-center cursor-pointer h-full ">
                  <IoMdRemove />
                </div>
                {/* amount */}
                <div className="h-full flex justify-center items-center px-2">{quantity}</div>
                {/* plus icon */}
                <div onClick={handleIncrease} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                  <IoMdAdd />
                </div>
              </div>

              {/* item price */}
              <div className="flex flex-1 items-center justify-around ">$ {price}</div>

              {/* final price */}
              <div className="flex-1 flex justify-end items-center text-primary font-medium ">${`${parseFloat((newQuantity * +item.price).toString()).toFixed(2)}`}</div>
            </div>
          </div>


        </div>

      </>
    // <div>
    //     {item.title}
    // </div>
    )
  }
  
  export default SideBarProduct