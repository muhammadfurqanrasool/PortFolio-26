import { useEffect } from "react"
import { skills } from "../utils"
import {motion} from "motion/react"
const Skills = () => {

    // const [skills, setSkills] = useState<{title: string, value: number}[]>([]);
    // const handleFetchSkills = async()=>{
    //     try {
    //         const res = await fetch("http://localhost:5500/api/skills", { method: "GET" });
    //         const data = await res.json();
    //         setSkills(data);
    //     } catch (error) {
    //         console.error("Failed to fetch skills",error);
    //     }
    // }
    useEffect(()=>{
        // handleFetchSkills();
        // const progress = document.querySelectorAll(".progress");
    },[])
  return (
    <section className="skills" id="skills">
        <h1>My <span className="color">Skills</span></h1>
        <div className="skills-cards">
            {skills?.map((el)=>{
                return (<div key={`${el.title}`} className="skill-card ">
                        <div className="text">
                            <span>{el.title}</span>
                            <span>{`${el.value}`}%</span>
                        </div>
                        <div className="progressbar">
                            <motion.div 
                            className="progress"
                            initial={{width: 0}}
                            whileInView={{width: el.value + "%"}}
                            transition={{duration: 1, repeat: 0}}
                            />
                        </div>
                    </div>)
            })}   
        </div>
    </section>
  )
}
export default Skills