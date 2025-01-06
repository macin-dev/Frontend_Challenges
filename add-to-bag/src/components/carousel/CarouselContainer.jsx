import { SHOP_ITEMS } from "../../../data";

const CarouselContainer = ({ handleImageZoom }) => {
  return (
    <>
      {SHOP_ITEMS.map((item) => (
        <div
          onClick={() => handleImageZoom(item.id)}
          className="embla__slide"
          key={item.id}
        >
          <img src={item.path} alt={item.alt} />
        </div>
      ))}
    </>
  );
};

export default CarouselContainer;
