import "./styles/App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Services } from "./components/services/Services";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
    </div>
  );
}

export default App;
