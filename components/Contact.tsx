'use client'

import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import content from '@/data';

const Contact = () => {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    return (
        <div className='min-h-screen flex justify-center items-center relative bg-soft dark:bg-black' id='mycontact' >
            <div className='w-full md:w-4/5 flex flex-col md:flex-row-reverse justify-around items-center md:rounded-xl shadow-soft dark:shadow-none'
                style={{ backgroundColor: '#091c29' }}
            >
                <div className={`${animated ? '' : 'translate-y-20 opacity-0'} transform transition duration-3000 text-white font-dosis w-4/5 md:w-2/5 mt-5`}>
                    <h1 className='font-bold text-5xl animate-pulse1s'>{content.contact.title}</h1>
                    <p className='text-2xl mt-5'>{content.contact.desc}</p>
                    <div className="flex justify-center md:justify-start flex-wrap mt-5 -mx-20 sm:mx-0">
                        {content.contact.socials.map((sosmed, index) => (
                            <a key={index} href={`${sosmed.url}`} className='mx-2' target="_blank" rel="noopener noreferrer">
                                <span>
                                    <Image
                                        src={sosmed.img} alt={sosmed.alt} width={0} height={0} sizes='100vw'
                                        className={`w-[50px] ${index % 2 === 0 ? 'animate-newbounce' : 'animate-rebounce'}`}
                                    />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <Image
                    src={content.contact.img} alt=""
                    height={0}
                    width={0}
                    sizes='100vw'
                    quality={100}
                    className='w-[250px] my-10 transition duration-3000 ease-in-out rounded-lg'
                />
            </div>
            <ScrollLink to='home' smooth={true}>
                <button className='absolute right-5 bottom-2 MT-5 font-bold text-white md:text-black dark:md:text-white font-dosis px-1 border-b-2 border-transparent hover:text-indigo-700 hover:border-indigo-500 anim'>
                    Back to Top
                </button>
            </ScrollLink>
        </div>
    )
}

export default Contact