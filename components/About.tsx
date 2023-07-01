import Image from 'next/image';
import { FaDesktop, FaDatabase, FaTools } from "react-icons/fa";
import content from '@/data';

const About = () => {
    return (
        <div className='min-h-screen flex flex-col-reverse md:flex-row justify-evenly items-center font-dosis bg-soft dark:bg-black' id='about'>
            <div className='w-11/12 md:w-2/5 flex flex-wrap justify-center mt-10 md:mt-0'>
                {content.stack.tech.map((tech, index) => (
                    <span key={index}
                        className={`${index % 2 === 0 ? 'animate-float' : 'animate-refloat'} w-32 h-32 m-4 p-4 bg-soft dark:bg-gray-500 shadow-2xl hover:shadow dark:hover:shadow-softBlack flex justify-center items-center rounded-full cursor-pointer anim`}>
                        <Image src={tech.img} alt={tech.alt} width={0} height={0} sizes='100vw' className='w-full' />
                    </span>
                ))}
            </div>
            <div className='w-5/6 md:w-2/5 mt-10'>
                <h1 className='text-4xl font-bold'>About Me</h1>
                <h2 className=' mt-3 text-3xl font-bold'>Ichsan Kurniawan</h2>
                <p className='mt-5 w-11/12 md:max-w-xl text-lg md:text-xl'>{content.stack.desc}.</p>
                <div className='flex flex-row items-center font-bold m-3 text-indigo-500'>
                    <span><FaDesktop size={22} /></span>
                    <p className='ml-3 text-xl'>Frontend</p>
                </div>
                <div className='flex flex-row items-center font-bold m-3 text-indigo-500'>
                    <span><FaDatabase size={22} /></span>
                    <p className='ml-3 text-xl'>Backend</p>
                </div>
                <div className='flex flex-row items-center font-bold m-3 text-indigo-500'>
                    <span><FaTools size={22} /></span>
                    <p className='ml-3 text-xl'>Other</p>
                </div>
            </div>
        </div>
    )
}

export default About