import Categories from "./components/Navbar/Categories";
import Navbar from "./components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousal from "./components/Carousal/Carousal";
import Shop from "./components/Shoping/Shop";
import Context from "./components/Constants/Context";
import { userContext } from "./components/Constants/Context";
import Bestsellers from "./components/Bestsellers/Bestsellers";
import Cart from "./components/Cart/Cart";
import Details from "./components/Details/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fish from "./components/Fish/Fish";
import Search from "./components/search/Search";
import Login from "./Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Context>
          <Navbar />
         
          {/* <Carousal /> */}

          {/* <Shop /> */}
          <Routes>
          <Route path="/" element={ <Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/bestsellers" element={<Bestsellers />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/search/" element={<Search />} />
            <Route path="/login/" element={<Login />} />
            
          </Routes>
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
