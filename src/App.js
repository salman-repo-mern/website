import Header from './components/Header';
import HeroSection from './components/HeroSection'
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <About/>
      <Products/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
