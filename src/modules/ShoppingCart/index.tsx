import { useEffect } from 'react'
import XMarkIcon from '@/assets/img/close.svg'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { IProductItem } from '@/types/product';
import CartItem from './CartItem';
import { removeFromCart, updateCart } from '@/features/cartSlice';
import { handleQuantityChangeInputRedux, setTotalPrice } from '@/features/totalPriceSlice';
import { calculateTotalPrice } from '@/utils/helper';
import { Link } from 'react-router-dom';
import { ROUTER } from '@/constants/path';

interface cartProps {
  toggleCart?: () => void
}


export default function ShoppingCart({toggleCart}: cartProps) {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.cartList.items)
  const totalState = useSelector((state: RootState) => state.totalPrice.totalPrice)

  useEffect(() => {
    const newTotalPrice = calculateTotalPrice(products);
    dispatch(setTotalPrice(newTotalPrice));
  }, [products]);
  
  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity === 0) {
      dispatch(removeFromCart(id));
    } else if (id && quantity) {
      const updatedCart = products.map((product) =>
        product.id === id ? { ...product, quantity } : product
      );
      dispatch(updateCart(updatedCart));
  
      const newTotalPrice = calculateTotalPrice(updatedCart);
      dispatch(setTotalPrice(newTotalPrice))
    }
  };
  
  const handleRemoveFromCart = (id: number) => {
    const updatedCart = products.filter((product) => product.id !== id);
    dispatch(updateCart(updatedCart));
  
    const newTotalPrice = calculateTotalPrice(updatedCart);
    dispatch(setTotalPrice(newTotalPrice))
  };

  const handleQuantityChangeInput = (id: number, quantity: number) => {
    const newValue = quantity.replace(/[^0-9]/g, '')
    if (+newValue >= 999999) {
      return
    }
    if (id) {
      const updatedCart = products.map((product) =>
        product.id === id ? { ...product, quantity: +newValue } : product
      )

      dispatch(handleQuantityChangeInputRedux({ id, quantity: +newValue, cartList: products }));
      // setProductList(updatedCart)
      // dispatch(addToCart(updatedCart))

      const newTotalPrice = calculateTotalPrice(updatedCart)
      dispatch(setTotalPrice(newTotalPrice))
    }
  }


  return (
    <>
      <div className='pl-150 pointer-events-none fixed inset-y-0 right-0 z-50 flex max-w-full shopping-cart'>
        <div className='pointer-events-auto w-screen max-w-md'>
          <div className='flex h-full flex-col bg-white shadow-xl'>
            <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
              <div className='flex justify-end'>
                <button
                  onClick={toggleCart}
                  className='relative -m-2 p-2 text-gray-400 hover:text-gray-500'
                >
                  <img src={XMarkIcon} alt="x close" />
                </button>
              </div>
              <div className='flex items-start justify-between'>
                <h2 className='text-lg font-bold text-gray-900' id='slide-over-title'>
                  Shopping cart
                </h2>
              </div>
              <div className='mt-8'>
                <div className='flow-root'>
                  <ul role='list' className='-my-6'>
                    {products?.map((product: IProductItem) => (
                      <CartItem
                        key={product.id}
                        product={product}
                        quantityChange={handleQuantityChange}
                        removeCart={handleRemoveFromCart}
                        handleQuantityChangeInput={handleQuantityChangeInput}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className='px-4 py-6 sm:px-6'>
              <div className='flex justify-between text-base font-medium text-gray-900'>
                <p>Subtotal</p>
                <p>${totalState}</p>
              </div>
              <div className='mt-6 click-buy'>
              {/* <div className='mt-6' onClick={handleClickBuy}> */}
                <Link to={ROUTER.CHECKOUT_PAGE} className='flex cursor-pointer items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700'>
                  Proceed to payment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}