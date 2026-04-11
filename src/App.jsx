
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRB from "./components/NavbarRB";
import ItemCount from "./components/ItemCount";

function App() {
 
const alumno = 'Pepe'
const alumnos = [
  'Nahuel',
  'Pamela',
  'Amir',
  'Juan'
]
console.log('App')
  return (
    <>
     {/* <Navbar compras={100}/> */}
     <NavbarRB/>
     <ItemListContainer saludo="Bienvenidos a mi App!" alumno={alumno} students={alumnos}/>
     <ItemCount stock={5}/>
    </>
  )
}

export default App
