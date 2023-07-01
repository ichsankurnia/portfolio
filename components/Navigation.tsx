'use client'

import { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import content from '@/data'
import useStartAnimation from '@/hooks/useStartAnimation'
import visitorInformation, { insertVisitor, validateVisitorTime } from '@/data/visitorInformation'
import Link from 'next/link'

/**
 * Z-20 nav
 * z-10 project card
 * z-30 project modal wrapper
 * z-50 procjet modal content
 * 
 */

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)
    const animate = useStartAnimation()

    useEffect(() => {
        async function fetchVisitor() {
            const visitor = await visitorInformation()
            console.log(visitor)

            if (validateVisitorTime()) {
                console.log("INPUT VISITOR")
                insertVisitor('/api/visit', visitor)
                    .then(res => {
                        console.log(res)
                    })
            } else {
                console.log("DONT INPUT VISITOR")
            }
        }

        fetchVisitor()
    }, [])

    return (
        <div style={{ backgroundColor: '#091c29' }} className='fixed top-0 w-screen z-20'>
            <nav className="w-10/12 mx-auto py-3 flex items-center justify-between text-white font-dosis">
                <ScrollLink to='home' smooth={true} className={`${animate ? '' : '-translate-x-20 opacity-0'} transform transition duration-2500 text-3xl font-bold cursor-pointer`} onClick={() => window.location.reload()}>
                    <h1>{content.nav.logo}{' '}
                        <span className='w-3 h-3 bg-red-500 rounded-full inline-block'></span>
                    </h1>
                </ScrollLink>
                <ul className={`hidden md:block ${animate ? '' : 'translate-x-20 opacity-0'} transform transition duration-2500`}>
                    {content.nav.links.map((link, index) => (
                        <ScrollLink to={link.to} smooth={true} key={index}>
                            <span className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-blue-400 anim'>{link.text}</span>
                        </ScrollLink>
                    ))}
                    <Link href='/ux-porto' className='font-bold text-lg mr-4 px-2 cursor-pointer border-b-2 border-transparent hover:border-blue-400 anim'>UX Design</Link>
                </ul>
                <div className='md:hidden -mr-1 flex'>
                    <button onClick={() => setIsOpen(!isOpen)}
                        className='bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-indigo-500 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
                    >
                        {/* <span>Open Main Menu</span> */}
                        {isOpen ?
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        }
                    </button>
                </div>
            </nav>
            {isOpen &&
                <NavMobile onClick={() => setIsOpen(false)} />
            }
        </div>
    )
}

const NavMobile = ({ onClick }: any) => {
    const animate = useStartAnimation()

    return (
        <ul className={`md:hidden flex flex-col text-white font-dosis w-11/12 mx-auto pl-2 pb-5 ${animate ? '' : 'translate-x-60 -translate-y-7 opacity-0'} transform transition duration-1000`}>
            {content.nav.links.map((link, index) => (
                <ScrollLink to={link.to} smooth={true} key={index} className='px-3 py-1 cursor-pointer rounded-md hover:bg-indigo-600' onClick={onClick}>
                    <li className='font-bold text-lg'>{link.text}</li>
                </ScrollLink>
            ))}
            <Link href='/ux-porto' className='font-bold text-lg px-3 py-1 cursor-pointer rounded-md hover:bg-indigo-600'>UX Design</Link>
        </ul>
    )
}

export default Navigation