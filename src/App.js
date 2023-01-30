import "./App.css";
import {
  Hero,
  Join,
  Plans,
  Programs,
  Reasons,
  Testimonils,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonils />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
