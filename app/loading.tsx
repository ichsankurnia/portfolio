import { FC } from 'react';

type Props = {};

const Loading: FC<Props> = ({ }) => {
    return (
        <>
            <div className='flex justify-center items-center w-full h-screen bg-black bg-opacity-80'>
                <div>
                    <span
                        className="relative inset-0 inline-flex 
                            h-6 w-6 md:h-10 md:w-10 animate-spin items-center justify-center rounded-full 
                            border-2 md:border-4 border-gray-300 
                            after:absolute after:h-8 after:w-8 md:after:h-14 md:after:w-14 after:rounded-full 
                            after:border-2 md:after:border-4 after:border-y-white after:border-x-transparent">
                    </span>
                </div>
            </div>
        </>
    );
}

export default Loading;