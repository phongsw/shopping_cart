import { IProductItem } from "@/types/product"

interface ProductItemProps {
  id: number
  title?: string
  images?: string
  price?: number
  description?: string
  handleAddToCart: (product: IProductItem) => void
}

const ProductCard = ({ id, images, title, price, description, handleAddToCart  }: ProductItemProps) => {
  const handelClickButton = () => {
    handleAddToCart({
      id: id,
      title: title,
      images: images,
      description: description,
      price: price,
      quantity: 1
    })
  }
  
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-full"
          src={images}
          alt="product image"
        />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <span className="text-gray-900 overflow-scroll text-desc">{description}</span>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>

          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handelClickButton}
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
