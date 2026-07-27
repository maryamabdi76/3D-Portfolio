import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <StarsCanvas />
      <div className="relative z-10 bg-[#0c1024]/95">
        <div className="relative overflow-hidden">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
