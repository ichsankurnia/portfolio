import { FC } from 'react';

type Props = {};

const Page: FC<Props> = () => {
    return (
        <>
            <div className="h-screen">
                <iframe className='w-full h-full' title='UX Design Course by Google' src='https://docs.google.com/presentation/d/1eLwOP3AjrulI7VuF3BLCNTHFjSXtVtF5ptcuF6oHYW0/edit?usp=sharing'></iframe>
            </div>
        </>
    );
}

export default Page;