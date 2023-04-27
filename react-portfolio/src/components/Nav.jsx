import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export default function Nav() {
    return (
        <div className='py-10 mb-5'>
            <ul className='flex items-center justify-center'>
              <li> 
                <a className='cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mx-2 rounded-md '>About</a>
              </li>
              <li> 
                <a className='cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mx-2 rounded-md '>Projects</a>
              </li>
              <li> 
                <a className='cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mx-2 rounded-md '>Skills</a>
              </li>
              <li> 
                <a className='cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 mx-2 rounded-md '>Resume</a>
              </li>
            </ul>
            <ul className='flex items-center justify-center mt-5 text-gray-700'>
              <li className='cursor-pointer px-4 pt-2  text-2xl'>
                <a >
                  <BsFillMoonStarsFill/>
                </a>
              </li>
              <li className='cursor-pointer px-4 pt-2  text-3xl '>
                <a href="https://www.linkedin.com/in/austinih/" target="_blank" >
                  <AiFillLinkedin/>
                </a>
              </li>
              <li className='cursor-pointer px-4 pt-2  text-3xl'>
                <a href="https://github.com/austinih" target="_blank">
                  <AiFillGithub/>
                </a> 
              </li>
            </ul>
        </div>
    )
}