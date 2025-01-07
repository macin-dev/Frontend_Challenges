const SizeOption = ({ name, value, idLabel }) => {
  return (
    <li className="config__option-size size-available-true">
      <input
        className="config__radio"
        type="radio"
        name={name}
        value={value}
        id={idLabel}
      />
      <label className="config__btn" htmlFor={idLabel}></label>
      {value}
    </li>
  );
};

export default SizeOption;
