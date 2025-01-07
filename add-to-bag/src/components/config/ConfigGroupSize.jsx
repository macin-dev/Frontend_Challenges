import SizeOptionsMap from "./SizeOptionsMap";

const ConfigGroupSize = () => {
  return (
    <div className="config__group-size">
      <header className="config__header">
        <div className="config__header-left">
          <h4 className="config__heading">Select Size:</h4>
        </div>
        <div className="config__size-guide">Size Guide</div>
      </header>
      <fieldset className="config__options-size">
        <SizeOptionsMap />
      </fieldset>
    </div>
  );
};

export default ConfigGroupSize;
