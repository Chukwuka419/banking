import './App.css';
import Navbar from "./Contents/Navbar"
import Section from "./Contents/Section"
import Footer from "./Contents/Footer"
import About from './Contents/About';
import Education from './Contents/Education';
import Work from './Contents/Work';
import Contact from './Contents/Contact';

function App() {
  return (
    <div className="App">

   <Navbar/>
   <Section/>
   <About/>
   <Education/>
   <Work/>
   <Contact/>
   <Footer/>

    </div>
  );
}

export default App;
