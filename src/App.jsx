
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
import ChooseUs from './Components/ChooseUs';
import Download from './Components/Download';
import FAQs from './Components/FAQs';
import FAQItem from './Components/FAQItem';

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
    <ChooseUs />
    <Download />
    
    <FAQs />
    <Banner_Homepage />
    <Banner_otherPages />
    <Footer />

      
    </>
  )
}

export default App
