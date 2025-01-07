import SizeOption from "./SizeOption";
import { sizeOptions } from "../../../data";

const SizeOptionsMap = () => {
  return (
    <>
      {sizeOptions.map((item) => (
        <SizeOption
          key={item.id}
          idLabel={item.idLabel}
          name={item.name}
          value={item.value}
        />
      ))}
    </>
  );
};

export default SizeOptionsMap;
