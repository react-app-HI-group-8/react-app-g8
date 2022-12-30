import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Marketplace from "./components/marketplace/Marketplace";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Gallery />
      <Marketplace />
    </div>
  );
}

export default App;
