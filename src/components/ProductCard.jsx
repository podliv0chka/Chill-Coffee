export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={`/images/${product.image}`}
          alt={product.flavor}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3>{product.flavor}</h3>
        <p className="product-desc">{product.description}</p>
        <p className="product-features">{product.features}</p>
        <div className="price-section">
          <div>
            <p className="price-label">Для дистрибьютора</p>
            <p className="price-value">{product.wholesale}</p>
          </div>
          <div>
            <p className="price-label">Рекомендованная цена</p>
            <p className="price-value">{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
