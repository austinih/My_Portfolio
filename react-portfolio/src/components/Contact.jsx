import {AiFillLinkedin, AiFillGithub, AiFillPhone} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'


export default function Contact() {
    return (
        <div className="  w-screen  pt-16 pb-8 bg-cyan-500 flex flex-col md:flex-row md:justify-center">
            <div className='flex flex-col justify-start w-96 mx-5 md:mx-36'>
                <h2 className=' text-left text-white text-3xl'>Contact Me</h2>
                <p className='text-left text-white text-xl mt-4'>Feel free to reach out via your preferred method. I look forward to connecting with you!</p>
                <p className='text-left text-white text-xl mt-4'>Austin Holland - Austin, TX</p>
                <div className='flex text-left text-white mt-4'>
                    <AiFillPhone className='text-left text-2xl mr-4 '/>
                    <p>+ 1 (702) 302 - 1772</p>
                </div>
                <div className='flex text-white mt-4'>
                    <MdEmail className='text-left text-2xl mr-4 '/>
                    <p>austinih46@gmail.com</p>
                </div>
            </div>
            <div className='mt-8 w-screen border-2 border-white mx-auto rounded-2xl md:w-0 md:h-56  md:mt-0 md:mx-0'></div>
            <ul className='mt-8 flex   items-center justify-center  text-gray-700 md:items-start md:align-top  md:mx-36 md:flex-col md:mt-0'>
                <li className='cursor-pointer px-4 pb-2 text-7xl text-white hover:text-gray-800 '>
                    <a href="https://www.linkedin.com/in/austinih/" target="_blank" >
                    <AiFillLinkedin/>
                    </a>
                </li>
                <li className='cursor-pointer px-4 pb-2 text-7xl text-white hover:text-gray-800'>
                    <a href="https://github.com/austinih" target="_blank">
                    <AiFillGithub/>
                    </a> 
                </li>
                <li>
                    <button onClick={() => window.open('mailto:austinih46@gmail.com', '_blank')} className='cursor-pointer px-4 pb-2 text-7xl text-white hover:text-gray-800' >
                        <MdEmail />
                    </button>
                </li>
            </ul>
    </div>
    )
}