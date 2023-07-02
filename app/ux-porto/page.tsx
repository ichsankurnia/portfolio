import { type Metadata } from 'next';
import { FC } from 'react';
import content from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'UX Portfolio | Ichsankurnia',
    icons: [
        { rel: "icon", type: 'image/png', url: "/chigiri.png" },
        { rel: "apple-touch-icon", type: 'image/png', url: "/assets/ux/mytrailer.png" }
    ],
}

type Props = {};

const Page: FC<Props> = () => {
    return (
        <>
            <div className='w-11/12 md:w-10/12 2xl:w-8/12 mx-auto flex flex-col font-dosis p-5 2xl:py-10 min-h-screen'>
                <div className='flex justify-between items-center'>
                    <Link href='/' className='text-3xl font-bold cursor-pointer'>{content.nav.logo}{' '}
                        <span className='w-3 h-3 bg-red-500 rounded-full inline-block'></span>
                    </Link>
                    <h1 className='font-bold text-xl md:text-3xl'>UX Portfolio</h1>
                </div>
                <div className='bg-white text-black rounded-2xl flex flex-col md:flex-row justify-between mt-12 2xl:mt-16 shadow-soft dark:shadow-none'>
                    <div className='text-lg 2xl:text-xl p-5 2xl:p-8'>
                        <h2 className='text-2xl 2xl:text-3xl font-semibold'>Movie Trailer App</h2>
                        <p className='py-5'>
                            Through UX Design course by Google, we were given the task of selecting a subject to work on, and my subject is a mobile application that displays and browses movie trailers.
                            Movie Trailer App (MyTrailer) is an application that makes it easy for users to find movies they want to watch in a cinema, watch trailers, view release schedules and search for cinemas showing the film.
                        </p>
                        <Link href='/ux-porto/detail' className='font-bold hover:text-indigo-600 hover:underline anim'>Live View</Link>
                    </div>
                    <Image alt='mytrailer' src='/assets/ux/mytrailer.png' width={0} height={0} sizes='100vw' priority
                        className='w-full md:w-5/12 h-64 md:h-full object-cover rounded-b-2xl md:rounded-b-none md:rounded-r-2xl'
                    />
                </div>
                <div className='mt-20'>Upcoming next..</div>
            </div>
        </>
    );
}

export default Page;