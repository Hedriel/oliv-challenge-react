import "./styles/App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Services } from "./components/services/Services";
import { Work } from "./components/work/Work"
import { Why } from "./components/why/Why";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Work />
      <Why />
      <Footer />
    </div>
  );
}

export default App;
