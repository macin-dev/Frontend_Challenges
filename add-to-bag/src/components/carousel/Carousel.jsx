import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import CarouselContainer from "./CarouselContainer";
import EmblaCarouselModal from "./EmblaCarouselModal";
import { DotButton } from "./DotButton";
import { useDotButtons } from "../../hook/useDotButtons";
import "./Carousel.css";

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButtons(emblaApi);
  const [zoomInImage, setZoomInImage] = useState({
    id: null,
    openModal: false,
  });

  const handleImageZoom = (idImage) => {
    setZoomInImage({
      ...zoomInImage,
      id: idImage,
      openModal: !zoomInImage.openModal,
    });
  };

  const handleCloseModal = () => {
    setZoomInImage({
      ...zoomInImage,
      openModal: !zoomInImage.openModal,
    });
  };

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <CarouselContainer handleImageZoom={handleImageZoom} />
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
      {zoomInImage.openModal ? (
        <EmblaCarouselModal
          idImage={zoomInImage.id}
          handleCloseModal={handleCloseModal}
        />
      ) : (
        false
      )}
    </>
  );
};

export default Carousel;
