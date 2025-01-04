import useEmblaCarousel from "embla-carousel-react";
import CarouselContainer from "./CarouselContainer";
import { DotButton, useDotButtons } from "./EmblaCarouselDotButtons";
import "./Carousel.css";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButtons(emblaApi);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <CarouselContainer />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={"embla__dot".concat(
              index === selectedIndex ? " embla__dot--selected" : ""
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
