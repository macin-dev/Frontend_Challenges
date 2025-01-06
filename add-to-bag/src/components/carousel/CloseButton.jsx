const CloseButton = ({ handleCloseModal }) => {
  return (
    <button onClick={handleCloseModal} className="gallery__close-modal">
      <img src="/src/assets/icons/x.svg" alt="x icon" />
    </button>
  );
};

export default CloseButton;
