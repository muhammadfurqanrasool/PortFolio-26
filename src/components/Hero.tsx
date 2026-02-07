import { FaArrowDown } from "react-icons/fa"
import {motion} from "motion/react"
const Hero = () => {
  return (
      <motion.section className="hero"
      
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 2}}
      >
      <div className="left">
        
          <span>HELLO, I'M</span>
          <h1>Full Stack <br /><span className="color">Web Developer</span></h1>
          <p>I build modern, scalable web applications from front to back. Passionate about clean code, great UX,  and turning ideas into reality.  </p>
          <div className="btns">
            <button className="primary">View Projects</button>
            <button>Contact Me</button>
          </div>
      </div>
      <div className="right">
        <div className="img">
          <div className="glow"></div>
          <img src="/assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="arrow"><FaArrowDown /></div>
      </motion.section>
  )
}

export default Hero