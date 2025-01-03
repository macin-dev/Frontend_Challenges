import { SHOP_ITEMS } from "../../../data";

const CarouselContainer = () => {
  return (
    <>
      {SHOP_ITEMS.map((item) => (
        <div className="embla__slide" key={item.id}>
          <img src={item.path} alt={item.alt} />
        </div>
      ))}
    </>
  );
};

export default CarouselContainer;
