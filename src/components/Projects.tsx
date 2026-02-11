import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import type { Project } from "../utils";

const Projects = () => {
    const [projects,setProjects] = useState<Array<Project> | null>(null);
        const fetchProjects = async()=>{
            const querySnapshot = await getDocs(collection(db, "projects"));
          const projectData = querySnapshot.docs.map(doc => {
            const data = doc.data();
            return {
                id: data.id,
                title: data.title as string,
                description : data.description as string,
                tags: data.tags as String[],
                githubLink: data.githubLink as string,
                liveLink: data.liveLink as string
            }
          });
          setProjects(projectData);
        }
    
        useEffect(()=>{
            fetchProjects()
        },[])

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
                            </div>
                            GitHub ↗
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