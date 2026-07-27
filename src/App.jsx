import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Experience,
  Footer,
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
        <Education />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
