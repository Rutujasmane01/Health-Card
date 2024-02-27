import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './camponents/Navbar';
import Home from './camponents/home';
import About from './camponents/about';
import Services from './camponents/Services';
import Contact from './camponents/contact';
import Footer from './camponents/footer';

function App() {
  console.log("Rendering App component");
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


