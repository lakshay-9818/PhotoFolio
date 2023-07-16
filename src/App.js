import Navbar from "./components/Navbar";
import "./global.css";
import { AlbumProvider } from "./context/AlbumContext";
import MainBody from "./MainBody";
function App() {
  return (
    <AlbumProvider>
      <div className="App">
        <Navbar />    

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="" className="d-block w-50" alt="first"/>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-50" alt="second"/>
    </div>
    <div className="carousel-item">
      <img src="" className="d-block w-50" alt="third"/>
    </div>
  </div>
</div>

        <MainBody />
      </div>
    </AlbumProvider>
  );
}

export default App;
