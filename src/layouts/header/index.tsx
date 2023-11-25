import React, { useState } from 'react';
import ShoppingCartIcon from '@/assets/img/shopping-cart.png';
import logoIc from '@/assets/img/Logo.png'
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const [showCart, setShowCart] = useState(false);

  const handleToggleCart = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <header className="w-full bg-white shadow dark:bg-gray-800 mb-5">
      <div className="container mx-auto py-4 px-4 flex justify-between">
        <Link to="/" className="flex items-center">
          <img src={logoIc} alt="Shop Logo" className="w-16 h-16" />
        </Link>

        <div className="flex items-center justify-end">
          <button onClick={handleToggleCart} className="relative">
            <img src={ShoppingCartIcon} alt="shopping cart icon" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 text-xs font-bold bg-red-500 rounded-full px-1 py-0.5">
                {cartCount}
              </span>
            )}
          </button>

          {showCart && (
            <div className="fixed top-0 left-0 w-full h-full bg-white shadow z-10 p-4">
              <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

              <ul className="list-none">
                {/* Your cart items here */}
              </ul>

              <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded">
                Checkout
              </button>

              <button
                className="mt-2 bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded"
                onClick={handleToggleCart}
              >
                Close Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
