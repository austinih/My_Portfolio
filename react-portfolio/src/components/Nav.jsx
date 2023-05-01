import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link'


export default function Nav() {
    return (
        <div className='pt-5 py-5  bg-slate-100  w-screen top-0 fixed shadow-md'>
            
            <ul className='flex items-center justify-center'>
              <li> 
                <Link href="#about-section" className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md '>About</Link>
              </li>
              <li> 
                <Link href="#skills-section" className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md '>Skills</Link>
              </li>
              <li> 
                <Link href="#projects-section" className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md '>Projects</Link>
              </li>
              
              <li> 
                <a className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md '>Resume</a>
              </li>
              <li className='cursor-pointer px-4 pt-2  text-2xl'>
                <a >
                  <BsFillMoonStarsFill/>
                </a>
              </li>

            </ul>
            
            
        </div>
    )
}