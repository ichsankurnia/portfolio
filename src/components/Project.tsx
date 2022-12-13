import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import content from '../content'
import projectContent from '../content/projectContent';


const Project = () => {
    const [modal, setModal] = useState(false)
    const [privateProjct, setPrivateProject] = useState(false)
    const [selectedPrject, setSelectedProject] = useState(null)

    const handleOpenModal = (data: any) => {
        console.log(data)
        if(data?.private){
            setPrivateProject(true)
        }else{
            setSelectedProject(data)
            setModal(true)
        }
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
                            <LazyLoadImage effect='blur' alt='' src={proj.img_thumb} className='shadow-soft rounded-md' style={{maxHeight: 275}} />
                            <div className='flex flex-col text-center items-center bg-white rounded-lg shadow-2xl py-3 px-4 w-88 -mt-20 z-10'>
                                <h2 className='font-bold text-lg md:text-xl'>{proj.title}</h2>
                                <p className='text-center text-sm md:text-md mt-2 w-11/12'>{proj.short_desc}</p>
                                <div className='mt-2 w-full flex flex-wrap justify-center'>
                                {proj.tools_tech.map((tool, k) => (
                                    <a key={k} href={`https://github.com/topics/${tool.toLowerCase() === 'c#'? 'csharp' : tool.toLowerCase()}`} target="_blank" rel="noopener noreferrer">
                                        <span
                                            className='text-sm border-1 text-indigo-400 border-indigo-700 px-2 rounded-md m-1 cursor-help hover:bg-indigo-600 hover:text-white anim'
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

const ModalProject = ({project, onClose}: any) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-30">
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="bg-soft w-11/12 md:w-9/12 mx-auto my-auto py-4 px-6 text-left overflow-y-auto rounded shadow-2xl z-50" style={{ maxHeight: '98vh'}}>
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
                    {project.list_img.map((data: any, index: number) => (
                        <div key={index} className='mb-10 text-center'>
                            <LazyLoadImage src={data.img} effect='blur' alt="" style={{maxHeight: 500}} />
                            <p className='text-sm md:text-base'>{data.img_desc}</p>        
                        </div>
                    ))}
                    </div>
                    {/* End Body */}

                    {/* Footer */}
                    <div className="flex justify-end">
                        <button className="px-4 bg-indigo-500 py-2 rounded-lg text-white hover:bg-black" onClick={onClose}>Close</button>
                    </div>
                    {/* End Footer */}
            </div>
            {/* End Modal Content */}

        </div>
    )
}


const PrivateProject = ({onClose}: any) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center z-30 overflow-auto">
            <div className="absolute w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="bg-soft w-11/12 md:w-3/5 2xl:w-5/12 mx-auto my-auto py-4 px-6 rounded shadow-2xl z-50 overflow-y-auto">
                {/* Body */}
                <div className='flex flex-col justify-center items-center text-center'>
                    <h1 className='text-lg md:text-2xl mb-5' >Oops.. this project is private due to confidential of the company and client, contact me for further information</h1>
                    <ScrollLink to='mycontact' smooth={true}>
                        <button className='px-4 py-2 bg-indigo-500 rounded-lg text-white hover:bg-black' onClick={onClose}>Contact Me</button>
                    </ScrollLink>
                </div>
                {/* End Body */}
            </div>
            {/* End Modal Content */}

        </div>
    )
}

export default Project