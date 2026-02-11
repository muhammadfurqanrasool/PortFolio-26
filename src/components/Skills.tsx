import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import {motion} from "motion/react"
import { useEffect, useState } from "react"
import type { Skill } from "../utils"
const Skills = () => {
    const [skills,setSkills] = useState<Array<Skill> | null>(null);
    const fetchSkills = async()=>{
        const querySnapshot = await getDocs(collection(db, "skills"));
      const skillData = querySnapshot.docs.map(doc =>  {
        const data = doc.data();
        return {
            id: data.id,
            title: data.title as string,
            value: data.value as number
        }
      });
      
      
        setSkills(skillData);
    }

    useEffect(()=>{
        fetchSkills()
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