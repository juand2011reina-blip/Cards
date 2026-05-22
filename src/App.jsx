import Tarjeta from "./components/Tarjeta.jsx";
import Saludo from "./components/Tarjeta.jsx";
import Sonic from "./assets/sonic.png"
import JohnnyCage from "./assets/johnnycage.png"
import SpiderMan from "./assets/spiderman.jfif"
import "./App.css"

function App() {

  const personajes = [{
  nombre: "Sonic",
  profesión: "Héroe de la ciudad de Green Hills",
  imagen: Sonic
  }, 
  {nombre: "Johnny Cage",
   profesión: "Actor de Hollywood y luchador de artes marciales",
   imagen: JohnnyCage 
  }, 
  {nombre: "Spider-Man",
   profesión: "Tu amigable vecino aracnido",
   imagen: SpiderMan
  }]

  function saludar(nombre) {
    alert("Hola ", nombre)
  }

  return (
  <div className="app-container"> 
    <h1 className="app-title">Personajes</h1>
    <div className="grid-personajes">
      {personajes.map((personaje, index) => {
        return (
          <div key={index} className="tarjeta-wrapper"> 
            <Tarjeta 
              nombre={personaje.nombre} 
              profesión={personaje.profesión} 
              imagen={personaje.imagen}   
            />
            <button className="btn-saludar" onClick={() => saludar(personaje.nombre)}>
              Saludar
            </button>
          </div>
        )
      })}
    </div>
  </div>
)
}

export default App