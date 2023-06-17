import './App.css';
import image from "./flowers.jpeg"; 

function App() {
  return (
    <div id="entire" style={{ 
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}>
    <nav id="navbar"> 
    <ul>
        <li className="navoption" id="title" >Romana Gardens</li>
        <li className="navoption" id="nottitle" >Contact</li>
        <li className="navoption" id="nottitle">About</li>
    </ul>
</nav>
</div>
  );
}

export default App;
