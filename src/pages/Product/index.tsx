import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import ShoppingCart from '@/modules/ShoppingCart';
import { useState } from 'react';
import ShoppingCartIcon from '@/assets/img/shopping-cart.png';
import { IProductItem } from '@/types/product';

const ProductList = () => {
  const products = useSelector((state: RootState) => state.shoppingCart.productList)
  const [productList, setProductList] = useState(products)
  const [isCartVisible, setIsCartVisible] = useState(false)

  // show hide detail cart
  const toggleCart = () => {
    setIsCartVisible(!isCartVisible)
  }

  const handleAddToCart = async (productToAdd: IProductItem) => {
    if (!isCartVisible) {
      setIsCartVisible(true)
    }
    const isProductInCart = productList.some((product) => product.id === productToAdd.id)

    if (isProductInCart) {
      const updatedCart = productList.map((product) =>
        product.id === productToAdd.id ? { ...product, quantity: product.quantity + 1 } : product
      )
      setProductList(updatedCart)
    } else {
      const updatedCart = [...productList, { ...productToAdd, quantity: 1 }]
      setProductList(updatedCart)
    }
  }

  return (
    <>
      <div className="container-product">
        <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {productList?.map((product) => (
            <li className="grid-item" key={product.id}>
              <ProductCard
                id={product.id}
                title={product.title}
                images={product.images}
                price={product.price}
                description={product.description}
                handleAddToCart={handleAddToCart}
              />
            </li>
          ))}
        </ul>
      </div>
      {productList && productList.length > 0 && (
          <button
            className='button-hover fixed bottom-14 right-0 z-50 rounded-lg p-3'
            onClick={toggleCart}
          >
            <img src={ShoppingCartIcon} alt="x close" />
          </button>
        )}
      {isCartVisible && <ShoppingCart toggleCart={toggleCart} />}
    </>
    
  );
};

export default ProductList;
