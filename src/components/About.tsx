import { FaCode, FaDatabase, FaNodeJs } from 'react-icons/fa'

const About = () => {
  return (
    <section className='about' id='about'>
        <h2 className='section-title'>About <span className="color">Me</span></h2>
        <p className='section-description'>I'm a full stack web developer with a passion for building elegant, high-performance applications. I enjoy working across the entire stack, from crafting pixel-perfect interfaces to designing robust backend architectures and databases.</p>
        <div className="cards">
            <div className="card">
                <div className="icon">
                    <FaCode/>
                </div>
                <h4>Frontend</h4>
                <p>React, Typescript, Tailwind</p>
            </div>
            <div className="card">
                <div className="icon">
                    <FaNodeJs/>
                </div>
                <h4>Backend</h4>
                <p>NodeJS, ExpressJS, Prisma</p>
            </div>
            <div className="card">
                <div className="icon">
                    <FaDatabase/>
                </div>
                <h4>Databases</h4>
                <p>MongoDB, Postgresql, Firebase</p>
            </div>
        </div>
    </section>
  )
}

export default About