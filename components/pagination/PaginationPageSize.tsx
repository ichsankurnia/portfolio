'use client'

import { FC } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Pagination from './Pagination';

type Props = {
    currentPage: number
    totalRows: number
    totalPage?: number
    path: string
};

export const PAGE_SIZE_OPTIONS = [1, 2, 3, 4, 5, 10, 20, 50, 100]

const PaginationPageSize: FC<Props> = ({ currentPage, totalRows, totalPage, path }) => {
    const router = useRouter()
    const searchParams = useSearchParams();

    const savedLimit = Number(searchParams!.get('limit') as string) || 10;

    const handlePageSizeChange = (val: string) => {
        router.push(`${path}?page=${1}&limit=${val}`)
    }

    return (
        <>
            <div className='flex justify-between items-center mt-5'>
                <select value={savedLimit} onChange={(e) => handlePageSizeChange(e.target.value)} className='w-24 bg-white text-black dark:text-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded px-2 py-1'>
                    {PAGE_SIZE_OPTIONS.map((item) =>
                        <option key={item} className='bg-white text-black dark:text-white dark:bg-black'>{item}</option>
                    )}
                </select>
                <Pagination
                    path={path}
                    currentPage={currentPage}
                    totalRows={totalRows}
                    totalPage={totalPage}
                    limitPerPage={savedLimit}
                />
            </div>
        </>
    );
}

export default PaginationPageSize;