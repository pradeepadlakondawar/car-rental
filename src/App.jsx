
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  

  return (
    <>
    <Router>
    <Navbar />
    </Router>
    <Home />
      
    </>
  )
}

export default App
