import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import { Provider } from "react-redux";
import store from "./app/store";
import Login from "./components/Login";
import SuccessPage from "./pages/SuccessPage";

function App() {
  const [categories, setCategories] = useState<string[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");

  const categoryapi = async () => {
    const data = await axios.get("https://fakestoreapi.com/products/categories");
    setCategories(data.data);
  };

  useEffect(() => {
    categoryapi();
  }, [currentCategory]);

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <NavBar
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          />
          <Routes>
            <Route
              path="/"
              element={<HomePage currentCategory={currentCategory} />}
            />
            <Route
              path="/success"
              element={<SuccessPage />}
            />
            <Route
              path="/product/:id"
              element={<ProductPage />}
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
