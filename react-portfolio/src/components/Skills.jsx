import { FaReact, FaNodeJs} from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiCsswizardry, SiHtml5, SiPostgresql, SiSequelize, SiDjango, SiPython} from 'react-icons/si'


export default function Projects() {
    return (
       
        <div className="  w-screen pb-5 pt-16 bg-cyan-500">
            <h3 className='text-3xl mb-3 text-white  font-semibold text-center'>Languages & Technologies</h3>
            <ul className="mx-28 mt-16 flex flex-row flex-wrap justify-evenly">
                <li className="p-2 flex flex-col items-center">
                    <FaReact className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>React</h5>
                </li>
                <li className="p-2 flex flex-col items-center">
                    <FaNodeJs className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>Node</h5>
                </li>
                <li className="p-2 flex flex-col items-center">
                    <SiJavascript className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>JavaScript</h5>
                </li>
                <li className="p-2 flex flex-col items-center">
                    <SiTailwindcss className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>Tailwind</h5>
                </li>
                <li className="p-2 flex flex-col items-center">
                    <SiCsswizardry className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>CSS</h5>
                </li>
                <li className="p-2 flex flex-col items-center">
                    <SiHtml5 className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>HTML</h5>
                </li>
                <li className="p-2 flex flex-col items-center">
                    <SiPostgresql className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>PostgreSQL</h5>
                </li>
                <li className="p-2 flex flex-col items-center">
                    <SiSequelize className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>Sequelize</h5>
                </li>                
                <li className="p-2 flex flex-col items-center">
                    <SiDjango className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>Django</h5>
                </li>                   
                <li className="p-2 flex flex-col items-center">
                    <SiPython className='text-4xl text-white'/>
                    <h5 className='text-center text-white'>Python</h5>
                </li>                         
                     
            </ul>          
        </div>
    )
}