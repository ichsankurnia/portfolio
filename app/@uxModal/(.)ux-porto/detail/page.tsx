'use client'

import { FC } from 'react';
import UXModal from '@/components/modal/UXModal';

type Props = {};

const Test: FC<Props> = ({ }) => {
    return (
        <UXModal>
            {/* <>Haloo</> */}
            <div className='h-[80vh] md:h-[90vh] 2xl:h-[80vh] overflow-y-auto rounded-2xl' onClick={(e) => e.stopPropagation()} >
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSNOwzgFOwN6ZUkUkbjQEQAxkJQ7BpsyDYxXFZffeVwcnapgkyP4qhFLJLBC6ZNAVT0V_kW2MnKQove/embed?start=true&loop=true&delayms=4000" frameBorder="0" allowFullScreen title='UX Design Course by Google' className='w-full h-full'></iframe>
                {/* <iframe className='h-full w-full' title='UX Design Course by Google' src='https://docs.google.com/presentation/d/1eLwOP3AjrulI7VuF3BLCNTHFjSXtVtF5ptcuF6oHYW0/edit?usp=sharing'></iframe> */}
            </div>
        </UXModal>
    );
}

export default Test;