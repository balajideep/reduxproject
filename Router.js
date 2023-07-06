import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
 import Navbar from "./Navbar";
// import Right from "./Right";
import Cart from './Cart';



function App(){
    return(
        <div>

<BrowserRouter>
  <Navbar/>

<Routes>
     
     <Route path='/' element= {<Home/>}/>
     <Route path='/Cart' element= {<Cart/>}/>
     <Route path='/Cart'element={<Cart/>}/>
  </Routes> 
  
  </BrowserRouter> 
          </div>
    )
}
export default App;