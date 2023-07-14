import Navbar from "./components/Navbar";
import "./global.css";
import { AlbumProvider } from "./context/AlbumContext";
import MainBody from "./MainBody";
function App() {
  return (
    <AlbumProvider>
      <div className="App">
        <Navbar />
        <MainBody />
      </div>
    </AlbumProvider>
  );
}

export default App;
