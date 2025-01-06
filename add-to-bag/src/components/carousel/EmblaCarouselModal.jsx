import CloseButton from "./CloseButton";
import ZoomInImage from "./ZoomInImage";

const EmblaCarouselModal = ({ idImage, handleCloseModal }) => {
  return (
    <aside className="gallery__zoom-modal">
      <div className="gallery__zoom-modal-content">
        <ZoomInImage idImage={idImage} handleCloseModal={handleCloseModal} />
        <CloseButton handleCloseModal={handleCloseModal} />
      </div>
    </aside>
  );
};

export default EmblaCarouselModal;
