import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    name: "Indoor Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 25, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80" },
      { id: 2, name: "Peace Lily", price: 30, image: "https://images.unsplash.com/photo-1597055181300-d8c9f6c2c3e5?auto=format&fit=crop&w=600&q=80" },
      { id: 3, name: "Spider Plant", price: 20, image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80" },
      { id: 4, name: "ZZ Plant", price: 35, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4f6b?auto=format&fit=crop&w=600&q=80" },
      { id: 5, name: "Rubber Plant", price: 40, image: "https://images.unsplash.com/photo-1525490829609-d166ddb58678?auto=format&fit=crop&w=600&q=80" },
      { id: 6, name: "Boston Fern", price: 28, image: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    name: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 18, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80" },
      { id: 8, name: "Jade Plant", price: 22, image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80" },
      { id: 9, name: "Echeveria", price: 16, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&q=80" },
      { id: 10, name: "Haworthia", price: 19, image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?auto=format&fit=crop&w=600&q=80" },
      { id: 11, name: "Zebra Haworthia", price: 21, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80" },
      { id: 12, name: "String of Pearls", price: 26, image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80" }
    ]
  },
  {
    name: "Flowering Plants",
    plants: [
      { id: 13, name: "Rose Plant", price: 32, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80" },
      { id: 14, name: "Orchid", price: 45, image: "https://images.unsplash.com/photo-1566907225472-514a98f8fba0?auto=format&fit=crop&w=600&q=80" },
      { id: 15, name: "Anthurium", price: 38, image: "https://images.unsplash.com/photo-1597848212624-e8a1f6e0a5d1?auto=format&fit=crop&w=600&q=80" },
      { id: 16, name: "African Violet", price: 24, image: "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?auto=format&fit=crop&w=600&q=80" },
      { id: 17, name: "Begonia", price: 29, image: "https://images.unsplash.com/photo-1495231916356-a86217efff12?auto=format&fit=crop&w=600&q=80" },
      { id: 18, name: "Kalanchoe", price: 27, image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isInCart = id => cartItems.some(item => item.id === id);

  return (
    <div>
      <Navbar />
      <main className="products-page">
        <h1>Paradise Nursery Plants</h1>
        {plantCategories.map(category => (
          <section className="category-section" key={category.name}>
            <h2>{category.name}</h2>
            <div className="product-grid">
              {category.plants.map(plant => (
                <article className="product-card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />
                  <div className="product-info">
                    <h3>{plant.name}</h3>
                    <p className="product-price">Price: ${plant.price}</p>
                    <button
                      className="add-button"
                      disabled={isInCart(plant.id)}
                      onClick={() => dispatch(addItem(plant))}
                    >
                      {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;