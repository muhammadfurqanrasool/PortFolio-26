import React from "react"
import { About, Contact, Footer, Hero, Navbar, Projects, Skills } from "./components"

const App = () => {
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