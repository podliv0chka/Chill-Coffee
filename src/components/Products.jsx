import { products } from "../data/products.js";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <section id="products" className="products">
      <h2>Наши вкусы</h2>
      <p className="products-subtitle">4 оригинальных вкуса Chill Coffee</p>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
