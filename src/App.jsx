import Tarjeta from "./components/Tarjeta.jsx";
import Saludo from "./components/Tarjeta.jsx";
import Sonic from "./assets/sonic.png"
import JohnnyCage from "./assets/johnnycage.png"
import SpiderMan from "./assets/spiderman.jfif"
import "./App.css"

function App() {
  return (<> 
    <div>App</div>
    <Tarjeta nombre="Sonic" profesión="Héroe de la ciudad de Green Hills" imagen={Sonic}/>
    <Tarjeta nombre="Johnny Cage" profesión="Luchador" imagen={JohnnyCage}/>
    <Tarjeta nombre="Spider-Man" profesión="Tu amigable vecino aracnido" imagen={SpiderMan}/>
    </>
  )
}

export default App