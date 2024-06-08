
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import CarbookForm from './Form/CarbookForm';
import Footer from './Pages/Footer';
import Banner_Homepage from './Pages/Banner_Homepage';
import Banner_otherPages from './Pages/Banner_otherPages';
import RentalSteps from './Pages/RentalSteps';
import Testimonials from './Pages/Testimonials';

function App() {
  

  return (
    <>
    <Router>
    <Navbar />
    </Router>
    <Home />
    <CarbookForm />
    <RentalSteps />
    <Testimonials />
    
    <Banner_Homepage />
    <Banner_otherPages />
    <Footer />

      
    </>
  )
}

export default App
