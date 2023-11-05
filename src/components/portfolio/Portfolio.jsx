import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Dine-Inn ",
    img: "./dine-inn.png",
    desc: "I've developed Dine-Inn Live, a restaurant management system that provides a seamless user experience and makes it easier for administrators to control operations. The website's frontend is built using React.js, while the backend is managed with ASP Dot-net Core. Real-time user data is stored in MS SQL Server on Azure, and we've integrated Stripe for payment processing. ASP Identity is used to manage user identities.",
    link:"https://dine-inn.netlify.app/"
  },
  {
    id: 2,
    title: "Filmy-pedia",
    img: "./filmy.png",
    desc: "Filmy-pedia Live is your go-to place for movie information. I've designed and developed a dynamic movie database website using HTML5, CSS, and JavaScript. This website integrates with The Movie Database (TMDB) API to provide real-time information on the latest movies and TV shows, including details like runtime, rating, cast, description, genre, and current running status.",
    link:"https://filmypedia.netlify.app/"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button  >See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
