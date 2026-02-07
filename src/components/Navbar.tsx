import { Link } from "react-router-dom"
import {motion, useMotionValueEvent, useScroll} from "motion/react"
import { useState } from "react"
const Navbar = () => {
  const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
      console.log("h")
        const previous = scrollY.getPrevious() ?? 0
        if (current > previous && current > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })
  return (
      <motion.nav
      animate={{
                    y: hidden ? -140 : 0,
                    opacity: hidden ? 0 : 1,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
      className="header">

        <div className="logo">Furqan.</div>
            <ul className="nav-links">
                <li><Link  to="/">Home</Link></li>
                <li><Link to="#about">About</Link></li>
                <li><Link to="#skills">Skills</Link></li>
                <li><Link to="#projects">Projects</Link></li>
                <li><Link to="#contact">Contact</Link></li>
            </ul>

      </motion.nav>
  )
}

export default Navbar