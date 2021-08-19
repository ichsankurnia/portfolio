import React from 'react'
import Typical from 'react-typical'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import { Link as ScrollLink } from 'react-scroll';
import useStartAnimation from '../hooks/useStartAnimation';

const Header = () => {
    const animated = useStartAnimation()

    return (
        <div
            className='min-h-screen flex justify-center items-center' id='home' 
            style={{backgroundColor: '#091c29'}}
        >
            <div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center'>
                <div className='w-full md:w-2/5'>
                    <LazyLoadImage 
                        effect='blur'
                        src={content.header.img}
                        alt="" placeholderSrc={content.header.imgPlaceholder}
                        className='w-full mx-auto'
                    />
                </div>
                <div className='text-white font-dosis text-center md:text-left'>
                    <h2 className={`${animated? '': 'translate-y-10 opacity-0'} transform transition duration-2000 text-3xl md:text-4xl lg:text-6xl font-bold`}>
                        {content.header.text[0]}<br />
                        {content.header.text[1]}
                    </h2>
                    <h1 className={`${animated? '': 'translate-y-20 opacity-0'} transform transition duration-2000 text-2xl md:text-4xl text-gray-300 md:mt-5`}>
                        {content.header.text[2]}{' '}
                        <Typical
                            className='inline-block'
                            steps={content.header.typical}
                            loop={Infinity}
                        />
                    </h1>
                    <ScrollLink to='about' smooth={true}>
                        <button className='bg-indigo-500 px-10 py-3 text-xl mt-10 uppercase rounded-lg animate-float hover:bg-indigo-300'>{content.header.btnText}</button>
                    </ScrollLink>
                </div>
            </div>
        </div>
    )
}

export default Header