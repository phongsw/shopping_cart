import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="container-product">
      <ul className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        <li className="grid-item">
          <ProductCard />
        </li>
        <li className="grid-item">
          <ProductCard />
        </li>
        <li className="grid-item">
          <ProductCard />
        </li>
        <li className="grid-item">
          <ProductCard />
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
