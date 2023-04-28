import Image from 'next/image'
import rpgRealms from '../../public/Rpg-Realms.gif'
import tickit from '../../public/Tick-iT.gif'
import triviata from '../../public/Triviata.gif'
import worldWise from '../../public/World-Wise.gif'
import pathfinder from '../../public/pathfinder-generator.gif'

const projects = [
    {
        id:1,
        name:"RPG Realms",
        techStack:"React | Django | Tailwind",
        imageUrl: rpgRealms,
        summary: "",
        githubUrl: "",
        deployedUrl: "",
    },
    {
        id:2,
        name:"Tick-iT",
        techStack:"React | Django",
        imageUrl: tickit,
        summary: "",
        githubUrl: "",
        deployedUrl: "",
    },
    {
        id:3,
        name:"Triviata",
        techStack:"React | Sequelize | Express | PostgreSQL",
        imageUrl: triviata,
        summary: "",
        githubUrl: "",
        deployedUrl: "",
    },
    {
        id:4,
        name:"World Wise",
        techStack:"React | CSS",
        imageUrl: worldWise,
        summary: "",
        githubUrl: "",
        deployedUrl: "",
    },
    {
        id:5,
        name:"Pathfinder 2E Character Generator",
        techStack:"JavaScript | HTML 5 | CSS",
        imageUrl: pathfinder,
        summary: "",
        githubUrl: "",
        deployedUrl: "",
    }
]

export default function Projects() {
    return (
        <div>
            <div className='flex justify-center text-left'>
                <h3 className='text-3xl mb-3 text-cyan-600  font-semibold'>Projects</h3>
            </div>
            <div className='flex justify-evenly flex-wrap flex-row'>
                <div className='flex justify-evenly flex-wrap flex-row'>
                    {projects.map((project) => (
                        <div className='m-w-96'>
                            <Image src={project.imageUrl} className='w-80' />
                            <h3 >{project.name} </h3>
                        </div>
                        
                    ))}
                
                

                
                </div>
            </div>
        </div>
    )
}