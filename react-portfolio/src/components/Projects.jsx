import Image from 'next/image'
import rpgRealms from '../../public/Rpg-Realms.gif'
import tickit from '../../public/Tick-iT.gif'
import triviata from '../../public/Triviata.gif'
import worldWise from '../../public/World-Wise.gif'
import pathfinder from '../../public/pathfinder-generator.gif'
import { AiFillGithub, AiOutlineLink} from 'react-icons/ai'


const projects = [
    {
        id:1,
        name:"RPG Realms",
        techStack:"React | Django | Tailwind",
        imageUrl: rpgRealms,
        summary: "Discover, Review, and Discuss new and upcoming indie tabletop roleplaying games.",
        frontGithubUrl: "https://github.com/austinih/RPG_Realms_Frontend",
        backGithubUrl: "https://github.com/austinih/RPG_Realms_Backend",
        githubUrls: ["https://github.com/austinih/RPG_Realms_Frontend", "https://github.com/austinih/RPG_Realms_Backend"],
        deployedUrl: "",
        linksMessage: "Use the links below to visit the GitHub Front & Back end repos. Deployed site coming soon"
    },
    {
        id:2,
        name:"Tick-iT",
        techStack:"React | Django",
        imageUrl: tickit,
        summary: "Tick-iT is a concert search and booking app for venues across the Denver, CO area.",
        frontGithubUrl: "https://github.com/austinih/tickit_app_frontend",
        backGithubUrl: "https://github.com/austinih/tickit_app_backend",
        githubUrls: ["https://github.com/austinih/tickit_app_frontend", "https://github.com/austinih/tickit_app_backend"],
        deployedUrl: "",
        linksMessage: "Use the links below to visit the GitHub front & back end repos. Deployed site coming soon"    
    },
    {
        id:3,
        name:"Triviata",
        techStack:"React | Sequelize | Express | PostgreSQL",
        imageUrl: triviata,
        summary: "Test your knowledge and study better with Triviata, a quiz-app where you can create your own flashcards adn quizes.",
        frontGithubUrl: "https://github.com/lastnameisgold/triviata_app_frontend",
        backGithubUrl: "https://github.com/lastnameisgold/triviata_app_backend",
        githubUrls: ["https://github.com/lastnameisgold/triviata_app_frontend", "https://github.com/lastnameisgold/triviata_app_backend"],
        deployedUrl: "",
        linksMessage: "Use the links below to visit the GitHub front & back end repos. Deployed site coming soon"
    },
    {
        id:4,
        name:"World Wise",
        techStack:"React | CSS",
        imageUrl: worldWise,
        summary: "Utilizing the REST Countries API, users can search for information on hundreds of countries around the world.",
        frontGithubUrl: "https://github.com/austinih/Country_Selector",
        backGithubUrl: "NA",
        githubUrls: ["https://github.com/austinih/Country_Selector"],
        deployedUrl: "https://country-discovery.netlify.app/",
        linksMessage: "Use the links below to visit the GitHub repo & deployed site"
    },
    {
        id:5,
        name:"Pathfinder 2E Character Generator",
        techStack:"JavaScript | HTML 5 | CSS",
        imageUrl: pathfinder,
        summary: "Utilizing the Pathfinder2 API, this app allows users to generate a random character for the Pathfinder Tabletop Roleplaying Game",
        frontGithubUrl: "https://github.com/austinih/Pathfinder-2E-Random-Character-Generator",
        backGithubUrl: "NA",
        githubUrls: ["https://github.com/austinih/Pathfinder-2E-Random-Character-Generator"],
        deployedUrl: "https://pathfindercharinspiration.surge.sh/",
        linksMessage: "Use the links below to visit the GitHub repo & deployed site"

    }
]

 

export default function Projects() {
    return (
        <div>
            <div className='flex justify-center text-left'>
                <h3 className='text-3xl mb-3 text-cyan-600  font-semibold'>Projects</h3>
            </div>
            <div className='flex justify-center '>
                <div className=' flex  flex-wrap flex-row justify-evenly mx-auto max-w-4xl '>
                    {projects.map((project) => (
                        
                        <div className='w-96 px-7 py-2 m-5  rounded-2xl bg-gradient-to-b from-cyan-600 ' >
                            <Image src={project.imageUrl} className='w-[22rem] h-56 py-2' />
                            <h3 className='text-2xl text-left mt-2'>{project.name} </h3>
                            <h4 className='text-left mt-2 text-cyan-600'>{project.techStack}</h4>
                            <p className='text-left mt-2'>{project.summary}</p>
                            <p className='text-left mt-2 text-xs text-gray-700 italic'>{project.linksMessage}</p>
                            <div className='flex flex-row mt-2'>     
                                {project.githubUrls.map((githubUrl) =>(
                                    <a href={githubUrl} target="_blank" className='text-2xl pr-3'>
                                    <AiFillGithub/>
                                    </a>
                                ))} 
                                
                                <a href={project.deployedUrl} target="_blank" rel="noreferrer " className='text-2xl pr-3'>
                                    <AiOutlineLink/>    
                                
                                </a>
                            </div>
                        </div>
                    ))}
                   
                
                

                
                </div>
            </div>
        </div>
    )
}