import './App.css';

function App() {
  return (
    <div style={{ 
      backgroundImage: "url(/flowers.jpeg)",
      backgroundRepeat: 'no-repeat',
      width:'250px' 
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
