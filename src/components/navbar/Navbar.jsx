import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.span>
        <div className="social">
          <a href="https://github.com/Shailenkaushik" target="_blank">
            <img src="/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/shailen-kaushik-52b9b6249/" target="_blank">
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://leetcode.com/kaushikshailen131/" target="_blank">
            <img src="/leetcode.png" alt="" />
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
