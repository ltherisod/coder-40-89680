
import Navbar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarRB from "./components/NavbarRB";
import ItemCount from "./components/ItemCount";
import DinamicComponent from "./examples/DinamicComponent";
import ComponentChildren from "./examples/ComponentChildren";

function App() {
 

console.log('App')
  return (
    <>
     
     <NavbarRB/>
     <ItemListContainer saludo="Bienvenidos a mi App!" />
      {/* <ItemCount stock={5}/> */}
     {/* <ComponentChildren>
      Hola miren soy un children
     </ComponentChildren>
      <ComponentChildren>
      <p>Hola soy una children</p>
      <p>yo tambien</p>
     </ComponentChildren>
      <ComponentChildren>
      <p>Hola soy una children</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quo nobis, vitae ullam, reiciendis sunt veniam asperiores tenetur qui aliquid iure earum ad iste porro eius fugit nesciunt culpa? Ex?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet fuga maxime provident pariatur ea nam beatae inventore quos, dolorum distinctio facere, aliquam deserunt non quas vero ut dolores. Impedit, nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem qui, odio laborum voluptatem est vel labore distinctio eos quidem animi voluptatum dolorem inventore saepe aliquam, a repellat. Atque, nisi </p>
       <ItemCount stock={5}/>
     </ComponentChildren>
         <ComponentChildren>
      <DinamicComponent title='Miren soy una children' description="sarasa sarasa sarasa" image="https://i.postimg.cc/Y2JPJ0TM/success.png" btnText='Shop' color='dark' colorCss='blue'/>
     </ComponentChildren>
     <DinamicComponent title='This is fine' description="sarasa sarasa" image='https://i.postimg.cc/9MqqkQP9/whatdoyoumeme-Deco3.png' btnText='Go' color='primary' colorCss='red'/>
      <DinamicComponent title='Amsiedad' description="sarasa sarasa sarasa" image='https://i.postimg.cc/B6DXgwsc/whatdoyoumeme-Deco1.png'btnText='Shop' color='dark' colorCss='blue'/> */}
    
    </>
  )
}

export default App
