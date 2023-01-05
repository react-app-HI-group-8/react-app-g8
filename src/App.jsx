import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Marketplace from "./components/marketplace/Marketplace";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Banner headingType="gallery" />
      <Gallery />
      <Banner headingType="marketPlace" />
      <Marketplace />
    </div>
  );
}

export default App;
