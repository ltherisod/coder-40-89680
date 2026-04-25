
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRB from "./components/NavbarRB";
import ItemCount from "./components/ItemCount";
import DinamicComponent from "./examples/DinamicComponent";
import ComponentChildren from "./examples/ComponentChildren";
import FetchContainer from "./examples/FetchContainer";
//IMPORT HOC
import { withLogging } from "./hocs/withLogging";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
 
const ItemListConHOC = withLogging(ItemListContainer)
console.log('App')
  return (
    <>
     
     <NavbarRB/>
     {/* <FetchContainer/> */}
     <ItemListConHOC saludo="Bienvenidos a mi App!" />
      <ItemDetailContainer/>
    
    </>
  )
}

export default App
