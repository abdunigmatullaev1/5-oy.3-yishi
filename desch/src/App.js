import './App.css';
import Company from './components/Company/Company';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Company />
      <Product />
    </div>
  );
}

export default App;
