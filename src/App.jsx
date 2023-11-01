
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";


const App = () => {
  return (
    <div>

      <section id="Homepage">
        <Navbar />
        <Hero></Hero>
      </section>
      <section id="Services">
        <Parallax type="services" ></Parallax>
      </section>
      <section>
        <Services></Services>
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" ></Parallax>
      </section>
      <section></section>
      Portfolio
      <section id="Contact">
        Contact
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
