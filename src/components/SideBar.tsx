import {MdArrowRightAlt} from "react-icons/md"

type Props = {
  sideBarIsOpen: boolean,
  setSideBarIsOpen: (value: boolean) => void
}

const SideBar = ({sideBarIsOpen, setSideBarIsOpen}: Props) => {
  return (
    <div className={`${sideBarIsOpen ? "right-0" : "-right-full"} w-full bg-white fixed h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]  z-20 px-4 lg:px-[35px]`}>
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={() => setSideBarIsOpen(sideBarIsOpen === true ? false : true)}>
          <MdArrowRightAlt className="text-5xl"/>
        </div>
      </div>

    </div>

  )
}

export default SideBar