import Image from 'next/image'
import pathfinder from '../../public/pathfinder-generator.gif'


export default function Projects() {
    return (
        <div>
            <div className='flex justify-center text-left'>
                <h3 className='text-3xl mb-3 text-cyan-600  font-semibold'>Projects</h3>
            </div>
            <div className='flex justify-evenly'>
                <div className=''>
                
                <Image src={pathfinder} className='max-w-sm'/>
                </div>
            </div>
        </div>
    )
}