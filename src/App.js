import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Features from "./components/Features";
import MarketPlace from "./components/MarketPlace";
import Ambassadors from "./components/Ambassadors";
import Contact from "./components/Contact";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Products />
      <Features />
      <MarketPlace />
      <Ambassadors />
      <Contact />
    </div>
  );
}

export default App;
