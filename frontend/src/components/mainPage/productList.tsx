import ProductCard from "./productCard";
import { useGetProductsQuery } from "../../api/productApi";

const ProductsList = ({ seoURL }) => {
  const { data, error, isLoading } = useGetProductsQuery(seoURL);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data?.payload?.products;

  if (!Array.isArray(products) || products.length === 0) {
    return <p>No products found for the selected category.</p>;
  }

  return (
    <div className="grid grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.webID} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
