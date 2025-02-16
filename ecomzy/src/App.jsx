import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Cart from "./Pages/Cart";

import './App.css'

function App() {

  return (
   <div>
    <div className="bg-slate-900">
     <Navbar/>
    </div>
     <Routes >
       <Route path="/" element={<Home />} />
       <Route path="/cart" element={<Cart />} />
     </Routes>
   </div>
  )
}

export default App;
