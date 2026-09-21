import { Link, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import CartItem from "./components/CartItem";
import ProductList from "./components/ProductList";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main className="landing-page">
            <div className="landing-content">
              <h1>Paradise Nursery</h1>
              <p>
                Welcome to Paradise Nursery, your online destination for
                beautiful houseplants. Explore our collection of indoor
                plants, succulents, and flowering plants and bring the beauty
                of nature into your home.
              </p>
              <Link to="/plants" className="get-started-button">
                Get Started
              </Link>
            </div>
          </main>
        }
      />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
