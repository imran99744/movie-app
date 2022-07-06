import './App.css';
import Home from "./Home"
import SingelMovie from "./SingelMovie"
import Error from "./Error"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
   
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='movie/:id' element={<SingelMovie />} />
      <Route path="*" element={<Error />} />
      
    </Routes>
    
    </>
  );
}

export default App;
