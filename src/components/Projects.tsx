import { FaGithub } from "react-icons/fa"
import { projects } from "../utils"
import React from "react"
import { Link } from "react-router-dom"

const Projects = () => {

  return (
    <section className="project" id="projects">
        <h1>Featured <span className="color">Projects</span></h1>
            <div className="project-cards">
                {projects?.map(el=> {
                    return (<React.Fragment key={`${el.title}`}>
                        <div className="project-card">
                    <h4>{el.title}</h4>
                    <p>{el.description}</p>
                    <div className="tags">
                        {el.tags?.map(tag=>{
                            return (<span key={`${tag}`} className="tag">{tag}</span>)
                        })}
                    </div>
                    <div className="links">
                            <Link target="_blank" to={`${el.github}`}>
                        <div className="github">
                            <div className="icon">
                                <FaGithub/>
                            </div>
                            Github ⟶
                        </div>
                            </Link>
                    </div>
                </div>
                    </React.Fragment>)
                })}
            </div>
    </section>
  )
}
export default Projects