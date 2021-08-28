import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content'
import projectContent from '../content/projectContent';


const Project = () => {
    const [modal, setModal] = useState(false)
    const [selectedPrject, setSelectedProject] = useState(null)

    const handleOpenModal = (data) => {
        setSelectedProject(data)
        setModal(true)
    }

    return (
        <div id='myproject' className='min-h-screen bg-soft font-dosis py-10'>
            <div className='w-10/12 mx-auto flex flex-col justify-center text-left md:text-center'>
                <h1 className='font-bold text-4xl'>My Project</h1>
                <p className='text-xl mt-5'>{content.work.desc}</p>
            </div>
            <div className='flex flex-col justify-center items-center mt-5'>
            {projectContent.map((company, index) => (
                <div key={index} className={`text-center md:text-left w-10/12 mx-auto py-5 flex flex-col xs:flex-col sm:flex-col ${index%2===0? ' md:flex-row' : 'md:flex-row-reverse'} justify-center`}>
                    <div className='w-full md:w-1/5'>
                        <h2 className='font-bold text-xl md:text-2xl'>{company.title}</h2>
                        <p className='text-md md:text-lg mt-1 md:mt-2'>{company.desc}</p>
                    </div>
                    <div className='flex flex-wrap justify-center items-center w-full md:w-4/5'>
                    {company.projects.map((proj, j) => (
                        <div key={j} className='w-full md:w-2/5 m-7 flex flex-col items-center justify-center'>
                            <LazyLoadImage effect='blur' alt='' src={proj.img_thumb} className=' shadow-soft rounded-md' />
                            <div className='flex flex-col items-center bg-white rounded-lg shadow-2xl py-3 px-4 w-88 -mt-20 z-10'>
                                <h2 className='font-bold text-lg md:text-xl'>{proj.title}</h2>
                                <p className='text-center text-sm md:text-md mt-2 w-11/12'>{proj.short_desc}</p>
                                <div className='mt-2'>
                                {proj.tools_tech.map((tool, k) => (
                                    <span key={k} 
                                        className='text-sm border-1 text-indigo-400 border-indigo-700 px-2 rounded-md m-1 cursor-help hover:bg-indigo-600 hover:text-white'
                                    >
                                        {tool}
                                    </span>
                                ))}
                                </div>
                                <button className='bg-indigo-600 text-white px-6 py-1 rounded-2xl hover:bg-indigo-900 mt-4 -mb-7' onClick={() => handleOpenModal(proj)}>See More ➡</button>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            ))}
            </div>
            {modal && <ModalProject onClose={() => setModal(false)} project={selectedPrject} />}
        </div>
    )
}

const ModalProject = ({project, onClose}) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-30 overflow-auto">
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="bg-soft w-11/12 md:w-9/12 mx-auto my-auto rounded shadow-2xl z-50 overflow-y-auto">
                <div className="py-4 px-6 text-left">
                    {/* Title */}
                    <div className="flex justify-between items-center mb-3">
                        <p className="text-lg md:text-xl font-bold">Detail Project</p>
                        <div className="cursor-pointer" onClick={onClose}>
                            <svg className="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* End Title */}

                    {/* Body */}
                    <div className='flex flex-col items-center'>
                    {project.list_img.map((data, index) => (
                        <div key={index}>
                            <LazyLoadImage src={data.img} effect='blur' alt="" />
                            <p className='text-sm md:text-base'>{data.img_desc}</p>        
                        </div>
                    ))}
                    </div>
                    {/* End Body */}

                    {/* Footer */}
                    <div className="flex justify-end pt-2">
                        <button className="px-4 bg-indigo-500 py-2 rounded-lg text-white hover:bg-black" onClick={onClose}>Close</button>
                    </div>
                    {/* End Footer */}

                </div>
            </div>
            {/* End Modal Content */}

        </div>
    )
}

export default Project