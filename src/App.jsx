
import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return (
    <div>
     
      <section id="Homepage">
        <Navbar />
        <Hero></Hero>
      </section>
      <section id="Services">
Parallax
      </section>
      <section>
        Services
      </section>
      <section id="Portfolio">
        Parallax
      </section>
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
