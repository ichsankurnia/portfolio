'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import projectContent from '@/data/projectContent'
import content from '@/data'
import Modal from './modal/Modal'


const Project = () => {
    const [modal, setModal] = useState(false)
    const [privateProjct, setPrivateProject] = useState(false)
    const [selectedPrject, setSelectedProject] = useState(null)

    const handleOpenModal = (data: any) => {
        console.log(data)
        if (data?.private) {
            setPrivateProject(true)
        } else {
            setSelectedProject(data)
            setModal(true)
        }
    }

    return (
        <div id='myproject' className='min-h-screen bg-soft dark:bg-black font-dosis py-10'>
            <div className='w-10/12 mx-auto flex flex-col justify-center text-left md:text-center'>
                <h1 className='font-bold text-4xl'>My Project</h1>
                <p className='text-xl mt-5'>{content.work.desc}</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
                {projectContent.map((company, index) => (
                    <div key={index} className={`text-center md:text-left w-10/12 mx-auto py-10 flex flex-col xs:flex-col sm:flex-col ${index % 2 === 0 ? ' md:flex-row' : 'md:flex-row-reverse'} justify-center`}>
                        <div className='w-full md:w-1/5'>
                            <h2 className='font-bold text-xl md:text-2xl 2xl:text-3xl'>{company.title}</h2>
                            <p className='text-md md:text-lg mt-1 md:mt-2'>{company.desc}</p>
                        </div>
                        <div className='flex flex-wrap justify-center items-center w-full md:w-4/5'>
                            {company.projects.map((proj, j) => (
                                <div key={j} className='w-full md:w-2/5 m-7 flex flex-col items-center justify-center'>
                                    {/* <LazyLoadImage effect='blur' alt='' src={proj.img_thumb} className='shadow-soft rounded-md' style={{maxHeight: 275}} /> */}
                                    <Image alt='' src={proj.img_thumb} className='shadow-soft dark:shadow-none rounded-md w-full' style={{ maxHeight: 275 }} width={0} height={0} sizes='100vw' />
                                    <div className='flex flex-col text-center items-center bg-white dark:bg-darkblue rounded-lg shadow-2xl py-3 px-4 w-[22rem] 2xl:w-[24rem] -mt-20 z-10'>
                                        {/* <h2 className={`font-bold text-lg ${proj.title.length > 20 ? 'md:text-base' : 'md:text-xl'}`}>{proj.title}</h2> */}
                                        <h2 className='font-bold text-lg md:text-xl'>{proj.title}</h2>
                                        <p className='text-center text-sm md:text-md mt-2 w-11/12'>{proj.short_desc}</p>
                                        <div className='mt-2 w-full flex flex-wrap justify-center'>
                                            {proj.tools_tech.map((tool, k) => (
                                                <a key={k} href={`https://github.com/topics/${tool.toLowerCase() === 'c#' ? 'csharp' : tool.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                                                    <span
                                                        className='text-sm text-indigo-400 dark:text-indigo-300 border border-indigo-700 dark:border-indigo-500 px-2 rounded-md m-1 cursor-help hover:bg-indigo-600 hover:text-white anim'
                                                    >
                                                        {tool}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                        <button className='bg-indigo-600 text-white px-6 py-1 rounded-2xl hover:bg-indigo-900 mt-4 -mb-7 anim' onClick={() => handleOpenModal(proj)}>See More ➡</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {modal && <ModalProject onClose={() => setModal(false)} project={selectedPrject} />}
            {privateProjct && <PrivateProject onClose={() => setPrivateProject(false)} />}
        </div>
        // <div className='min-h-screen flex flex-col items-center justify-evenly font-dosis bg-soft' id='myproject'>
        //     <h1 className='text-4xl font-bold'>My Project</h1>
        //     <p className='text-xl'>Coming soon..</p>
        // </div>
    )
}

const ModalProject = ({ project, onClose }: any) => {
    return (
        <Modal onClose={onClose}>

            {/* Modal Content */}
            <div className="bg-soft dark:bg-black text-black dark:text-white w-full p-10 text-left overflow-y-auto rounded shadow-2xl z-50" style={{ maxHeight: '90vh' }} onClick={(e) => e.stopPropagation()}>
                {/* Title */}
                <div className="flex justify-between items-center mb-3">
                    <p className="text-lg md:text-xl 2xl:text-2xl font-bold">Detail Project</p>
                    <div className="cursor-pointer" onClick={onClose}>
                        <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                        </svg>
                    </div>
                </div>
                {/* End Title */}

                {/* Body */}
                <div className='flex flex-col items-center'>
                    {project.list_img.map((data: any, index: number) => (
                        <div key={index} className='mb-10 text-center'>
                            <Image src={data.img} alt="" style={{ maxHeight: 500 }} width={0} height={0} sizes='100vw' className='w-full' />
                            <p className='text-sm md:text-base mt-3'>{data.img_desc}</p>
                        </div>
                    ))}
                </div>
                {/* End Body */}

                {/* Footer */}
                <div className="flex justify-end">
                    <button className="px-8 bg-indigo-500 py-2 rounded-lg text-white hover:bg-black" onClick={onClose}>Close</button>
                </div>
                {/* End Footer */}
            </div>
            {/* End Modal Content */}

        </Modal>
    )
}


const PrivateProject = ({ onClose }: any) => {
    return (
        <Modal onClose={onClose}>
            <div className="bg-soft dark:bg-black w-full p-10 rounded shadow-2xl z-50 overflow-y-auto" onClick={(e) => e.stopPropagation()} >
                {/* Body */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <h2 className='text-lg md:text-2xl mb-8 text-black dark:text-white' >Oops.. this project is private due to confidential of the company and client, contact me for further information</h2>
                    <ScrollLink to='mycontact' smooth={true}>
                        <button className='px-4 py-2 bg-indigo-500 rounded-lg text-white hover:bg-black anim' onClick={onClose}>Contact Me</button>
                    </ScrollLink>
                </div>
                {/* End Body */}
            </div>
        </Modal>
    )
}

export default Project