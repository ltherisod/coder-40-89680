
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRB from "./components/NavbarRB";
import ItemCount from "./components/ItemCount";

function App() {
 

console.log('App')
  return (
    <>
     
     <NavbarRB/>
     <ItemListContainer saludo="Bienvenidos a mi App!" />
     <ItemCount stock={5}/>
    </>
  )
}

export default App
