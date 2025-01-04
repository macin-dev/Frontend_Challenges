import Title from "./Title";
import "./Header.css";
import ProductPrice from "./ProductPrice";

const Header = () => {
  return (
    <section className="header">
      <Title />
      <ProductPrice />
    </section>
  );
};

export default Header;
