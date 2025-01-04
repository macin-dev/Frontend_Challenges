import Rating from "./Rating";
import "./ProductPrice.css";

const ProductPrice = () => {
  return (
    <div className="product__price">
      <p className="product__price-values">
        <span className="product__price-original">$50.00</span>
        <span className="product__price-compare">$65.00</span>
        <span className="product__price-percentage-off">23% off</span>
      </p>
      <div className="product__price-reviews">
        <Rating />
        <span className="product__reviews-value">13 Reviews</span>
      </div>
    </div>
  );
};

export default ProductPrice;
