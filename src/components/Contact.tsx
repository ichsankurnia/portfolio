import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link as ScrollLink } from 'react-scroll';
import content from '../content'

const Contact = () => {
    const [animated, setAnimated] = useState(false)

    useEffect(() => {
        setAnimated(true)
    }, [])

    return (
        <div className='min-h-screen flex justify-center items-center relative'
            style={{backgroundColor: '#f5f5f5'}} id='mycontact'
        >
            <div className='w-full md:w-4/5 flex flex-col md:flex-row-reverse justify-around items-center md:rounded-xl shadow-soft'
                style={{backgroundColor: '#091c29'}}
            >
                <div className={`${animated? '': 'translate-y-20 opacity-0'} transform transition duration-3000 text-white font-dosis w-4/5 md:w-2/5 mt-5`}>
                    <h1 className='font-bold text-5xl animate-pulse1s'>{content.contact.title}</h1>
                    <p className='text-2xl mt-5'>{content.contact.desc}</p>
                    <div className="flex justify-center md:justify-start flex-wrap mt-5">
                        {content.contact.socials.map((sosmed, index) => (
                            <a key={index} href={`${sosmed.url}`} className='mx-2' target="_blank" rel="noopener noreferrer">
                                <span>
                                    <LazyLoadImage 
                                        src={sosmed.img} alt={sosmed.alt} effect='blur' width="50px" 
                                        placeholderSrc={content.contact.socials[2].img}
                                        className={`${index%2===0? 'animate-newbounce' : 'animate-rebounce'}`} 
                                    />
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                <LazyLoadImage 
                    src={content.contact.img} 
                    placeholderSrc={content.contact.imgPlaceholder} 
                    alt="" effect='blur' 
                    width="250px"
                    className='my-10 mx-auto transition duration-3000 ease-in-out'
                />
            </div>
            <ScrollLink to='home' smooth={true}>
                <button className='absolute right-5 bottom-2 font-bold text-white md:text-black font-dosis px-1 border-b-2 border-transparent hover:text-indigo-700 hover:border-indigo-500 anim'>
                    Back to Top
                </button>
            </ScrollLink>
        </div>
    )
}

export default Contact