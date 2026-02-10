import React, { useEffect } from "react"
import { About, Contact, Footer, Hero, Navbar, Projects, Skills } from "./components"
import { useLocation } from "react-router-dom";

const App = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }else {
      document.getElementById("hero")?.scrollIntoView();
    }
  }, [hash]);
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