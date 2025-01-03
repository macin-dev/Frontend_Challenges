import useEmblaCarousel from "embla-carousel-react";
import CarouselContainer from "./CarouselContainer";
import "./Carousel.css";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <CarouselContainer />
      </div>
    </div>
  );
};

export default Carousel;
