import { MdArrowRightAlt } from "react-icons/md";
import { useSelector } from "react-redux";
import { AppDispatch, AppState } from "../app/store";
import cartSlice from "../features/cartSlice";
import SideBarProduct from "../components/SideBarProduct";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { paymentIntent } from "../../utils/payment-intent-utils";

type Props = {
  sideBarIsOpen: boolean;
  setSideBarIsOpen: (value: boolean) => void;
};

const SideBar = ({ sideBarIsOpen, setSideBarIsOpen }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const cart = useSelector((state: AppState) => state.cart);
  const [total, setTotal] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    getTotal();
  }, [cart]);

  const clearAll = (): void => {
    dispatch(cartSlice.actions.clearCart());
  };

  const getTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      if (item.quantity !== undefined) {
        totalPrice += +item.price * item.quantity;
        setTotal(totalPrice);
      }
    });
  };

  // const checkout = async () => {
  //   try {
  //     const client_secret: unknown = await paymentIntent("http://127.0.0.1:8000/secret", total);
  //     navigate("/checkout", {
  //       state: {
  //         client_secret,
  //       },
  //     });
  //   } catch (error) {
  //     alert("An error has occurred; try again later!");
  //   }
  // };

  return (
    <div className={`${sideBarIsOpen ? "right-0" : "-right-full"} w-full bg-white  fixed h-full  shadow-2xl md:w-[40vw] z-20 md:px-[35px] `}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag ({cart.length})</div>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={() => setSideBarIsOpen(sideBarIsOpen === true ? false : true)}>
          <MdArrowRightAlt className="text-5xl" />
        </div>
      </div>
      <div className="mt-4">Cart Items:</div>
      <div className="overflow-y-scroll h-[70vh]">
        <div className="flex flex-col justify-center items-center md:block">
          {cart.map((item) => {
            return (
              <div
                className="my-10"
                key={item.id}>
                <SideBarProduct item={item} />
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-3 py-4 items-center">
          <div className="flex w-full justify-between items-center ">
            {/* total */}
            <div className="uppercase font-semibold ">
              <span>Total: </span>$ {parseFloat(total.toString()).toFixed(2)}
            </div>

            {/* clear cart icon */}
            <div
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
              onClick={clearAll}>
              <FiTrash2 />
            </div>
          </div>
          <p className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium ">View Cart</p>
          <p className="bg-primary text-gray-200 flex p-4 justify-center items-center w-full font-medium ">Checkout</p>
          {/* <Link to="/" className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium ">View Cart</Link> */}
          {/* <Link to="/" className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium ">Checkout</Link> */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
