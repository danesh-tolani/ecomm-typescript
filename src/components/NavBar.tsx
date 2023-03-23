import { useState } from "react"
import SideBar from "./SideBar"
import { BsBag } from "react-icons/bs"

type Props = {
  categories: string[],
  setCurrentCategory: (value: string) => void,
  currentCategory: string
}

const NavBar = ({categories, setCurrentCategory, currentCategory}: Props) => {
  
  const [expanded, setExpanded] = useState<boolean>(false)
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false)


  const handleEnter = ():void => {
    setExpanded(true)
  }

  const handleExit = ():void => {
    setExpanded(false)
  }

  const handleClick = (category:string):void => {
    setCurrentCategory(currentCategory === category ? "" : category)
  }

  const handleClose = (value: boolean) => {
    setSideBarIsOpen(value)
    console.log(value);
    
  }


  return (
    <div className="group transition fixed w-full bg-white z-10">
      <div className="w-full flex  justify-between items-center px-6 md:px-16 h-16 font-semibold relative">
        <p onMouseOver={() => handleEnter()} onMouseOut={() => handleExit()} className=" md:px-8 py-5 cursor-pointer">Explore</p>
        <p className="text-lg md:text-2xl">Shoppers Stop</p>
        <p onClick={() => handleClose(sideBarIsOpen === false ? true : false)} className="cursor-pointer flex items-center justify-center gap-x-3">Cart
          <BsBag className="2xl"/>
        </p>
      </div>
      { expanded && <div className="w-full bg-white flex justify-between flex-col items-start px-20 absolute" onMouseOver={() => handleEnter()} onMouseOut={() => handleExit()}>
          {categories.map((category) => {
            return (
              <div className="my-2 cursor-pointer" onClick={() => handleClick(category)}>
                {category.toUpperCase()}
              </div>
            )
          })}
        </div>
      }
      {sideBarIsOpen &&
        <div className="transition">
          <SideBar sideBarIsOpen={sideBarIsOpen} setSideBarIsOpen={setSideBarIsOpen} />
        </div>
      }
    </div>
  )
}

export default NavBar