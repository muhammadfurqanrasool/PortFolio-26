import {  FaTelegramPlane } from "react-icons/fa"
import {  email, linkedin, location } from "../utils"
import { CgMail } from "react-icons/cg"
import { GrLocationPin } from "react-icons/gr"
import { CiLinkedin } from "react-icons/ci"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Contact = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const  handleSubmit = async(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            fullName: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
            timestamps: Date.now(),
            id: Date.now()
        }
        if(data.fullName != "" && data.email != "" && data.message != "") {
            try {
                console.log("Here")
                setLoading(true)
                const docRef = await addDoc(collection(db, "messages"), data);
                console.log("Document written with ID: ", docRef.id);
                alert("Response Submitted!");
                navigate("/", {replace: true});
            } catch (e) {
                console.error("Error adding document: ", e);
                alert("Response could not be submitted.")
            } finally {
                setLoading(false)
            }
        }else {
            alert("Form fields required!")
        }
    }
  return (
    <section className="contact" id="contact">
        <h1>Get in <span className="color">Touch</span></h1>
        <div className="container">
            <div className="left">
                <p>Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>
                <div className="socials">
                    <div className="email social">
                        <CgMail size={25}/>
                        <span>{email}</span>
                    </div>
                    <div className="location social">
                        <GrLocationPin size={25}/>
                        <span>{location}</span>
                    </div>
                    <div className="linkedin social">
                        <CiLinkedin size={25}/>
                        <span>{linkedin}</span>
                    </div>
                </div>
            </div>
            <div className="right">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" name="name" required/>
                    <input type="email" placeholder="Your Email" name="email" required/>
                    <textarea required name="message" rows={10} id="message" placeholder="Your Message..."></textarea>
                    <button disabled={loading} className="primary"><FaTelegramPlane/> <span>Send Message</span></button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact