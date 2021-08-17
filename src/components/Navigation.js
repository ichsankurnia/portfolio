import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from '../content'
import useStartAnimation from '../hooks/useStartAnimation'

const Navigation = () => {
    const animate = useStartAnimation()

    return (
        <div style={{backgroundColor: '#091c29'}} className='fixed top-0 w-screen z-50'>
            <div className="w-10/12 mx-auto py-3 flex items-center justify-between text-white font-dosis">
                <h1 className={`${animate? '': '-translate-x-20 opacity-0'} transform transition duration-2500 text-3xl font-bold`} >{content.nav.logo}{' '}
                    <span className='w-3 h-3 bg-red-500 rounded-full inline-block'></span>
                </h1>
                <div className={`${animate? '': 'translate-x-20 opacity-0'} transform transition duration-2500`}>
                {content.nav.links.map((link, index) => (
                    <ScrollLink to={link.to} smooth={true} key={index}>
                        <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-blue-400'>{link.text}</span>
                    </ScrollLink>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Navigation