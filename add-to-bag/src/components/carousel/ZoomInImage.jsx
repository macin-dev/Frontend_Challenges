import { SHOP_ITEMS } from "../../../data";

const ZoomInImage = ({ idImage, handleCloseModal }) => {
  return (
    <>
      {SHOP_ITEMS.map((picture) => {
        if (picture.id == idImage) {
          return (
            <div
              key={picture.id}
              onClick={handleCloseModal}
              className="gallery__zoom-modal-image-wrapper"
            >
              <img src={picture.path} alt={picture.alt} />
            </div>
          );
        }
      })}
    </>
  );
};

export default ZoomInImage;
