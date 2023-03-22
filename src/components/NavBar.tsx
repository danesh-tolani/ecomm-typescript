import { useState } from "react"

type Props = {
  categories: string[],
  setCurrentCategory: (value: string) => void,
  currentCategory: string
}

const NavBar = ({categories, setCurrentCategory, currentCategory}: Props) => {
  
  const [expanded, setExpanded] = useState<boolean>(false)

  const handleEnter = ():void => {
    setExpanded(true)
  }

  const handleExit = ():void => {
    setExpanded(false)
  }

  const handleClick = (category:string):void => {
    setCurrentCategory(currentCategory === category ? "" : category)
  }


  return (
    <div className="group transition">
      <div className="w-full flex  justify-between items-center px-6 md:px-16 h-16 font-semibold">
        <p onMouseOver={() => handleEnter()} onMouseOut={() => handleExit()} className=" md:px-8 py-5 cursor-pointer">Explore</p>
        <p className="text-xl md:text-3xl">Shoppers Stop</p>
        <p>Cart</p>
      </div>
    { expanded && <div className="w-full absolute z-20 bg-white flex justify-between flex-col items-start px-20" onMouseOver={() => handleEnter()} onMouseOut={() => handleExit()}>
         {categories.map((category) => {
           return (
             <div className="my-2 cursor-pointer" onClick={() => handleClick(category)}>
              {category.toUpperCase()}
            </div>
          )
        })}
      </div>
    } 
    </div>
  )
}

export default NavBar