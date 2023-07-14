import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Album from "./components/Album";
import './global.css'
function App() {
    let album_id =null;
  
  return (
    <div className="App">
      <Navbar />
      {album_id?<Album album_id={album_id}/>:<Gallery/>}
      
    </div>
  );
}

export default App;
