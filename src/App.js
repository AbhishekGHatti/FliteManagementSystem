import Login from "./Components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/hompage";
import Register from "./Components/register"
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Homepage/>}/> 
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Register/>}/>
       
      </Routes>
       
  
    </BrowserRouter>
  );
}

export default App;
