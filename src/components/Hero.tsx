import { FaArrowDown } from "react-icons/fa"
import {motion} from "motion/react"
import { useNavigate } from "react-router-dom"
const Hero = () => {
  const navigate = useNavigate();
  return (
      <motion.section className="hero"
      id="hero"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration: 2}}
      >
      <div className="left">
        
          <span>HELLO, I'M</span>
          <h1><span>Full Stack</span> <span className="color">Web Developer</span></h1>
          <p>I build modern, scalable web applications from front to back. Passionate about clean code, great UX,  and turning ideas into reality.  </p>
          <div className="btns">
            <button className="primary" onClick={()=> navigate("#projects")}>View Projects</button>
            <button onClick={()=> navigate("#contact")}>Contact Me</button>
          </div>
      </div>
      <div className="right">
        <div className="img">
          <div className="glow"></div>
          <img src="/assets/me.jpg" alt="" />
        </div>
      </div>
      <div className="arrow" onClick={()=> navigate("#about")}><FaArrowDown /></div>
      </motion.section>
  )
}

export default Hero