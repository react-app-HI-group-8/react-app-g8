import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Marketplace from "./components/Marketplace/Marketplace";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Gallery />
        <Marketplace />
      </main>
      <Footer />
    </div>
  );
}

export default App;
