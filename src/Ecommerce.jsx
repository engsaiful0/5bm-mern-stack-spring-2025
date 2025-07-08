import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const products = [
  {
    id: 'prod_1',
    name: 'Wireless Headphones',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod_2',
    name: 'Smart Watch',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod_3',
    name: 'Bluetooth Speaker',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod_4',
    name: 'Fitness Tracker',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'prod_5',
    name: 'Portable Charger',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80'
  }
];

function Ecommerce() {
  const theme = useContext(ThemeContext);

  const handlePurchase = async (product) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert('Failed to initiate checkout.');
      }
    } catch (error) {
      alert('Error connecting to payment gateway.');
    }
  };

  return (
    <div className={`p-4 max-w-2xl mx-auto mt-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow rounded`}>
      <h1 className="text-2xl font-bold mb-6 text-center">Ecommerce Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map(product => (
          <div key={product.id} className="border rounded shadow p-4 flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mb-4 rounded" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="mb-2 text-green-600 font-bold">${product.price.toFixed(2)}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => handlePurchase(product)}
            >
              Purchase Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ecommerce;