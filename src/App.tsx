import axios from "axios"
import { useEffect, useState } from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import SideBar from "./components/SideBar"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

function App() {

  const [categories, setCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("")
  console.log(currentCategory)

  const categoryapi = async () => {
    const data = await axios.get("https://fakestoreapi.com/products/categories")
    setCategories(data.data)    
  };
  
  useEffect(() => {
    categoryapi();
  }, [currentCategory]);

  return (
    <div className="app">
      <NavBar categories = {categories} setCurrentCategory={setCurrentCategory} currentCategory = {currentCategory} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage currentCategory = {currentCategory}/>}/>
          <Route path="/product/:id" element={<ProductPage/>}/>
        </Routes>  
      {/* <SideBar/> */}
      </Router>      
    </div>
  )
}

export default App
