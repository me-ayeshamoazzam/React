import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Home></Home>
      <Navbar></Navbar>
      <About></About>
      <Contact></Contact>
      <Gallery></Gallery>
      <Services></Services>
    </>
  );
}

export default App;
