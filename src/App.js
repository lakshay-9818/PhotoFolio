import Navbar from "./components/Navbar";
import "./global.css";
import { AlbumProvider } from "./context/AlbumContext";
import MainBody from "./MainBody";
function App() {
  return (
    <AlbumProvider>
      <div className="App">
        <Navbar />
          
        {/*the MainBody component will give open up either a particular album or entire gallery depending on wheather albumId is null or a value has been asigned to it  */}      
       <MainBody />
      </div>
    </AlbumProvider>
  );
}

export default App;
