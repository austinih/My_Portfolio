import {BsFillMoonStarsFill} from 'react-icons/bs'
import Link from 'next/link'


export default function Nav() {
    return (
        <div className='pt-5 py-5  bg-slate-100  w-screen top-0 fixed shadow-md'>
            
            <ul className='flex items-center justify-center'>
              <li className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md  hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-cyan-600 hover:border-2 hover:border-cyan-600 hover:font-extrabold' > 
                <Link href="#about-section" className=''>About</Link>
              </li>
              <li className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-cyan-600 hover:border-2 hover:border-cyan-600 hover:font-extrabold'> 
                <Link href="#skills-section" >Skills</Link>
              </li>
              <li className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-cyan-600 hover:border-2 hover:border-cyan-600 hover:font-extrabold'> 
                <Link href="#projects-section" >Projects</Link>
              </li>
              
              <li className='cursor-pointer bg-gradient-to-r from-cyan-600 to-cyan-400 text-white px-4 py-2 mx-2 rounded-md hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-cyan-600 hover:border-2 hover:border-cyan-600 hover:font-extrabold'> 
                <Link href="#contact-section" >Contact</Link>
              </li>
              {/* Night Mode Icon - In Progress */}
              {/* <li className='cursor-pointer px-4 pt-2  text-2xl'>
                <a >
                  <BsFillMoonStarsFill/>
                </a>
              </li> */}

            </ul>
            
            
        </div>
    )
}