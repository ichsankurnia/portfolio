import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'

const Stack = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center font-dosis' id='stack'
            style={{backgroundColor: '#EEEEEE'}}
        >
            <h1 className='text-5xl font-bold'>Stack I Use</h1>
            <div className='flex flex-wrap justify-center mt-10'>
                {content.stack.tech.map((tech, index) => (
                    <span key={index} 
                        className={`${index % 2 === 0? 'animate-float' : 'animate-refloat'} w-40 h-40 m-2 bg-white shadow-2xl flex justify-center items-center rounded-full`}>
                        <LazyLoadImage src={tech.img} alt={tech.alt} />
                    </span>
                ))}
            </div>
            <p className='mt-10 w-11/12 md:max-w-xl text-xl md:text-2xl text-center'>{content.stack.desc}.</p>
        </div>
    )
}

export default Stack