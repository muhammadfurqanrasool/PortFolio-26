export type Skill = {
    title:String, 
    value : Number
}
export type Project = {
    title: String,
    bio: String,
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

export const projects: Array<Project> = [
    {title: "Connectify",
    bio : "A social media clone, which allows users to interact, add friends, read news feeds and chat with others",
    tags: ["ReactJS", "Tailwind", "CSS", "Javascript", "Git"],
    github: "https://www.github.com/muhammadfurqanrasool/"
    },
    {title: "Connectify - Backend",
    bio : "Backend for Connectify, which handles user authentication, post management and real-time chat",
    tags: ["NodeJS","ExpressJS", "Javascript", "Json Web Tokens", "Mongoose"],
    github: "https://www.github.com/muhammadfurqanrasool/"
    },
    {title: "Chessboard",
    bio : "A social media clone, which allows users to interact, add friends, read news feeds and chat with others",
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://www.github.com/muhammadfurqanrasool/"
    },
    ]

export const email = "muhammadfurqanrasool@gmail.com"
export const github = "https://github.com/muhammadfurqanrasool"
export const linkedin = "https://linkedin.com/in/muhammadfurqanrasool"
export const location = "Model Colony, Malir, Karachi"