import { FC } from 'react';
import usePagination, { DOTS } from '../../hooks/usePagination';
import Link from 'next/link';

interface Props {
    totalRows: number,
    totalPage?: number,
    currentPage: number,
    limitPerPage: number,
    siblingCount?: number,
    path: string,
    className?: string
}

const Pagination: FC<Props> = ({ totalRows, totalPage, siblingCount = 1, currentPage, limitPerPage, path, className }) => {

    const paginationRange = usePagination({
        currentPage,
        totalRows,
        totalPage,
        limitPerPage,
        siblingCount
    });

    let lastPage = paginationRange && paginationRange[paginationRange?.length - 1];

    if (currentPage === 0 || paginationRange?.length < 2) {
        return null;
    }

    const onNext = () => {
        if (currentPage === lastPage) return ''
        return `${path}?page=${currentPage + 1}&limit=${limitPerPage}`
        // onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        if (currentPage === 1) return ''
        // onPageChange(currentPage - 1);
        return `${path}?page=${currentPage - 1}&limit=${limitPerPage}`
    };


    return (
        <ul className='flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-300' >
            <li>
                <Link href={onPrevious()} className={`pagination-item space-x-1 w-16 h-8 ${currentPage === 1 ? 'text-gray-300 dark:text-gray-500 cursor-not-allowed' : 'hover:bg-gray-800 hover:text-white hover:border-white'}`} >
                    <span>Prev</span>
                </Link>
            </li>

            {paginationRange?.length && paginationRange!.map((pageNumber: string | number, key: number) => {
                if (pageNumber === DOTS) {
                    return <li key={key} className="dots">&#8230;</li>;
                }

                return (
                    <li key={key}>
                        <Link href={`${path}?page=${pageNumber}&limit=${limitPerPage}`}
                            className={`pagination-item hidden lg:flex w-11 h-8 ${pageNumber === currentPage ? 'text-white dark:border-white bg-gray-800' : 'hover:bg-gray-800 hover:text-white hover:border-white'}`}
                        >
                            {pageNumber}
                        </Link>
                    </li>
                );
            })}

            <li>
                <Link href={onNext()} className={`pagination-item space-x-1 w-16 h-8 ${currentPage === lastPage ? 'text-gray-300 dark:text-gray-500 cursor-not-allowed' : 'hover:bg-gray-800 hover:text-white hover:border-white'}`} >
                    <span>Next</span>
                </Link>
            </li>
        </ul>

        // <ul className={classnames('pagination-container', { [className]: className })} >
        //     <li
        //         className={classnames('pagination-item', {
        //             disabled: currentPage === 1
        //         })}
        //         onClick={onPrevious}
        //     >
        //         <div className="arrow left" />
        //     </li>
        //     {paginationRange!.map(pageNumber => {
        //         if (pageNumber === DOTS) {
        //             return <li className="pagination-item dots">&#8230;</li>;
        //         }

        //         return (
        //             <li
        //                 className={classnames('pagination-item', {
        //                     selected: pageNumber === currentPage
        //                 })}
        //                 onClick={() => onPageChange(pageNumber)}
        //             >
        //                 {pageNumber}
        //             </li>
        //         );
        //     })}
        //     <li
        //         className={classnames('pagination-item', {
        //             disabled: currentPage === lastPage
        //         })}
        //         onClick={onNext}
        //     >
        //         <div className="arrow right" />
        //     </li>
        // </ul>
    );
};

export default Pagination;