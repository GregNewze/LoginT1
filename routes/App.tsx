import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { register } from "module";
import CreationPerfil from "../pages/CreationPerfil";


function App(){
  return(
    <BrowserRouter>
      <Routes>
          <Route path ='/Home' element={Home}/>
          <Route path ='/*' element={<h1>Not Found</h1>}/>
          <Route path ='/Register' element={register}/>
          <Route path ='/CreationPerfil' element={CreationPerfil}/>
      </Routes>
    
    </BrowserRouter>

  )
}

export default App
 





