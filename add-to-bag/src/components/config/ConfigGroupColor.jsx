const ConfigGroupColor = () => {
  return (
    <div className="config__group-color">
      <header className="config__header">
        <h2 className="config__heading">
          Select color: <span className="config__selected-value">White</span>
        </h2>
      </header>
      <ul className="config__options">
        <li className="config__option config__option-color is-active"></li>
      </ul>
    </div>
  );
};

export default ConfigGroupColor;
