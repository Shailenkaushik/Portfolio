
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";



const App = () => {
  return (
    <div>

      <section id="Homepage">
        <Navbar />
        <Hero></Hero>
      </section>
      <section id="About">
      <About></About>
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
      {/* <section>
       
      </section> */}
      <Portfolio></Portfolio>
      
      <section id="Contact">
        <Contact></Contact>
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
