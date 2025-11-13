import Homepage from "./components/home";
import Signup from "./components/home/signup";
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App = () =>{

  return(

    
<BrowserRouter>
  <Routes>
    <Route path ='/' element={<Homepage/>}/>
    <Route path ='/signup' element={<Signup/>}/>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;