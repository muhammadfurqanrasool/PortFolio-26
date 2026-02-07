import React, { useState } from "react"
import { About, Contact, Footer, Hero, Navbar, Projects, Skills } from "./components"

import { useMotionValueEvent, useScroll, motion } from "motion/react"



const App = () => {
    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
      const previous = scrollY.getPrevious() ?? 0
      if (current > previous && current > 150) {
        setHidden(true)
      } else {
          console.log("Hello")
            setHidden(false)
        }
    })

  return (
    <React.Fragment>
      <div className="circle"></div>  
            <Navbar />     
    <main>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </React.Fragment>
  )
}

export default App