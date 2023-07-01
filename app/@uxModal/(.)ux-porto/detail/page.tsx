'use client'

import { FC } from 'react';
import UXModal from '@/components/modal/UXModal';

type Props = {};

const Test: FC<Props> = ({ }) => {
    return (
        <UXModal>
            {/* <>Haloo</> */}
            <div className='h-[90vh] overflow-y-auto rounded-2xl' onClick={(e) => e.stopPropagation()} >
                <iframe className='h-full w-full' title='UX Design Course by Google' src='https://docs.google.com/presentation/d/1eLwOP3AjrulI7VuF3BLCNTHFjSXtVtF5ptcuF6oHYW0/edit?usp=sharing'></iframe>
            </div>
        </UXModal>
    );
}

export default Test;