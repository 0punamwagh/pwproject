import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Footer from "./Components/Footer/Footer";
import ShopCategory from "./Pages/ShopCategory";
import laptops_banner from "./Components/Assets/banner_laptops.png";
import mobiles_banner from "./Components/Assets/banner_mobiles.png";
import shopping_bags_banner from "./Components/Assets/banner_shopping_bags.png";
import LoginSignup from "./Pages/LoginSignup";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mobiles" element={<ShopCategory banner={mobiles_banner} category="mobile" />} />
          <Route path="/laptops" element={<ShopCategory banner={laptops_banner} category="laptops" />} />
          <Route path="/shopping_bags" element={<ShopCategory banner={shopping_bags_banner} category="shopping_shops" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
