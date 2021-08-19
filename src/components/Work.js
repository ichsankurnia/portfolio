import React from 'react'
import content from '../content'

const payload = {
    date: 'October 2019-Present',
    office: 'PT Xxxxxx xxxx',
    position: 'FrontEnd',
    desc: content.contact.desc
}

let works = []
for (let i = 0; i < 4; i++) {
    works.push(payload)
}

const Work = () => {
    return (
        <div id='mywork' className='min-h-screen bg-soft pt-10'>
            <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-between items-start font-dosis'>
                <div className='w-full md:w-1/5'>
                    <h1 className='font-bold text-4xl'>My Work</h1>
                    <p className='text-xl mt-5'>{content.contact.desc}</p>
                </div>
                <div className='w-full sm:w-full md:w-9/12 mt-5'>
                    {works.map((data, index) => (
                        <div className={`relative flex flex-col p-3 border-indigo-600 md:border-b-4 ${index % 2 === 0? 'border-l-4 md:items-start' : 'md:items-end md:border-r-4 md:text-right'}`}>
                            <h1 className={`absolute top-0 bg-indigo-600 w-max p-2.5 text-white shadow-2xl text-2xl ${index % 2 === 0? 'left-0' : 'md:right-0'}`}>{data.date}</h1>
                            <h1 className='pt-14 font-bold text-3xl'>{data.office}</h1>
                            <h2 className='text-xl font-bold text-indigo-500'>{data.position}</h2>
                            <p className='text-lg mt-1'>{data.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work