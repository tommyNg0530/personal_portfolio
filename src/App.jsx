import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  GitHub,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <About />
          <Tech />
        </div>

        <div className="relative z-0">
          {/* <GitHub /> */}
          <Experience />
          <Works />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
