import Carousel from "./components/carousel/Carousel";
import Config from "./components/config/Config";
import Essential from "./components/config/Essential";
import Header from "./components/header/Header";

const App = () => {
  return (
    <section>
      <Header />
      <Carousel />
      <Essential>
        <Config />
      </Essential>
    </section>
  );
};

export default App;
