import ConfigGroupColor from "./ConfigGroupColor";
import ConfigGroupSize from "./ConfigGroupSize";
import "./Config.css";

const Config = () => {
  return (
    <section className="config">
      <ConfigGroupColor />
      <ConfigGroupSize />
    </section>
  );
};

export default Config;
