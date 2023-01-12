import Navbar from "./components/Navbar/Navbar";
import { useContext } from "react";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Marketplace from "./components/Marketplace/Marketplace";
import Footer from "./components/Footer/Footer";
import { ModalContext } from "./context/modalContext";

function App() {
  const { isModalOpen, showModal, handleOk, handleCancel } =
    useContext(ModalContext);

  return (
    <div className="App">
      <Navbar
        showModal={showModal}
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <main>
        <Hero
          showModal={showModal}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        <Gallery
          showModal={showModal}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        <Marketplace
          showModal={showModal}
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
