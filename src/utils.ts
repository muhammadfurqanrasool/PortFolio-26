export type Skill = {
    title:String, 
    value : Number
}
export type Project = {
    title: String,
    description: String,
    tags : Array<String>,
    link?: String,
    github?: String
}

export const skills: Array<Skill>  = [
    {title: "ReactJS", value: 92},
    {title: "Typescript", value: 80},
    {title: "NextJS", value: 85},
    {title: "NodeJS", value: 95},
    {title: "ExpressJS", value: 93},
    {title: "MongoDB", value: 90},
    {title: "Firebase", value: 75},
    {title: "Tailwind", value: 79},
    {title: "Prisma", value: 50},
    
]

export const email = "muhammadfurqanrasool@gmail.com"
export const github = "https://github.com/muhammadfurqanrasool"
export const linkedin = "https://linkedin.com/in/muhammadfurqanrasool"
export const location = "Model Colony, Malir, Karachi"


export const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSEGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
export const baseURL = import.meta.env.VITE_API;