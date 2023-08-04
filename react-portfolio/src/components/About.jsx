import Image from "next/image"
import headshot from '../../public/Austin_Headshot.jpeg'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


export default function About() {
    return (
        <div className="shadow-md w-screen  bg-wave bg-cover">
            <div className="bg-white bg-opacity-70 w-full h-full pb-5 pt-32">
                <h1 className='text-5xl py-2 mt-5 text-cyan-600 font-semibold'> Austin Holland</h1>
                    <h2 className='text-2xl py-2'>Full Stack Engineer </h2>
                    <ul className='flex pb-5 pt-2 items-center justify-center  text-gray-700'>
                    <li className='cursor-pointer px-4   text-3xl hover: hover:text-cyan-600'>
                        <a href="https://www.linkedin.com/in/austinih/" target="_blank" >
                        <AiFillLinkedin/>
                        </a>
                    </li>
                    <li className='cursor-pointer px-4   text-3xl hover:text-cyan-600'>
                        <a href="https://github.com/austinih" target="_blank">
                        <AiFillGithub/>
                        </a> 
                    </li>
                    </ul>
                <div className="my-5 flex flex-wrap flex-row justify-center">
                    <div className="p-5 mx-5 mb-5 bg-gradient-to-b from-cyan-600 rounded-ee-full w-80 h-80">
                        <Image src={headshot} alt="Austin Holland" className="rounded-full"/>
                    </div>
                    <div className="text-left max-w-2xl mx-5 text-md p-5 ">
                        <h2 className=" text-3xl mb-3 text-cyan-600  font-semibold">About Me</h2>
                        {/* <div className="bg-gray-800 opacity-80 p-5 rounded-2xl"> */}
                        <p className=' leading-7 text-gray-800'>Tech-savvy accountant turned innovative software engineer with a knack for building meaningful relationships and learning quickly. Combining analytical prowess with creative problem-solving, I bring a fresh perspective to coding, fueled by my passion for technology and curiosity for exploring the unknown. Adaptable, people-focused, and inventive, I thrive in collaborative environments where I can leverage my diverse background to drive impactful solutions and redefine what's possible in the world of technology.
                        </p>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}