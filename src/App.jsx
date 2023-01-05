import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Marketplace from "./components/marketplace/Marketplace";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Banner headingType="gallery" />
      <Gallery />
      <Banner headingType="marketPlace" />
      <Marketplace />
      <Footer />
    </div>
  );
}

export default App;
