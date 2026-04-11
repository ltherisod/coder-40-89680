
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRB from "./components/NavbarRB";

function App() {
 
const alumno = 'Pepe'
const alumnos = [
  'Nahuel',
  'Pamela',
  'Amir',
  'Juan'
]
  return (
    <>
     {/* <Navbar compras={100}/> */}
     <NavbarRB/>
     <ItemListContainer saludo="Bienvenidos a mi App!" alumno={alumno} students={alumnos}/>
    </>
  )
}

export default App
