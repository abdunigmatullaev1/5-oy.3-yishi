import './App.css';
import Comand from './components/Comand/Comand';
import Company from './components/Company/Company';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import News from './components/News/News';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Company />
      <Product />
      <Info />
      <Comand />
      <News />  
      <Footer />
    </div>
  );
}

export default App;
