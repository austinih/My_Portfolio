import Image from "next/image"
import headshot from '../../public/Austin_Headshot.jpeg'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


export default function About() {
    return (
        <div className="shadow-md w-screen pb-5 pt-32 ">
        <h1 className='text-5xl py-2 mt-5 text-cyan-600 font-semibold'> Austin Holland</h1>
            <h2 className='text-2xl py-2'>Full Stack Engineer </h2>
            <h2 className='text-2xl py-2'>React | Node | Python</h2>
            <ul className='flex pb-5 pt-2 items-center justify-center  text-gray-700'>
              <li className='cursor-pointer px-4   text-3xl '>
                <a href="https://www.linkedin.com/in/austinih/" target="_blank" >
                  <AiFillLinkedin/>
                </a>
              </li>
              <li className='cursor-pointer px-4   text-3xl'>
                <a href="https://github.com/austinih" target="_blank">
                  <AiFillGithub/>
                </a> 
              </li>
            </ul>
        <div className="my-5 flex flex-wrap flex-row justify-center">
            <div className="p-5 mx-5 mb-5 bg-gradient-to-b from-cyan-600 rounded-ee-full w-80 h-80">
                <Image src={headshot}  className="rounded-full"/>
            </div>
            <div className="text-left max-w-2xl mx-5 text-md p-5 ">
                <h2 className=" text-3xl mb-3 text-cyan-600  font-semibold">About Me</h2>
                <p className=' leading-7 text-gray-800'>I’m a Full Stack Software Engineer with a background in Accounting and Recruiting. I use my previous experience in combination with software development to first understand the why behind a project. And second, to deliver a user-friendly solution that exceeds expectations. I believe technology should be simple, powerful, and fun! I strive to incorporate these principles in every product I create to improve the world one program at a time.
                </p>
            </div>
        </div>
        </div>
    )
}