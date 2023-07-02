import { FC } from 'react';
import Link from 'next/link';
import content from '@/data';
import VisitModel from '@/lib/database/visit'
import dayjs from 'dayjs';
import PaginationPageSize from '@/components/pagination/PaginationPageSize';

async function getData(current_page?: string, limit?: string) {
    // const res = await fetch('/api/visit')
    // // The return value is *not* serialized
    // // You can return Date, Map, Set, etc.

    // // Recommendation: handle errors
    // if (!res.ok) {
    //     // This will activate the closest `error.js` Error Boundary
    //     throw new Error('Failed to fetch data')
    // }

    // const data: ResponseData = await res.json()
    // return data
    // const data = await VisitModel.find()
    const currentPage = Number(current_page) || 1
    const limitPage = Number(limit) || 10
    const data = await VisitModel.find().sort({ _id: -1 }).skip((currentPage - 1) * limitPage).limit(limitPage)
    const total_rows = await VisitModel.countDocuments()
    return { rows: data, total_rows }
}

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
};
const Page: FC<Props> = async ({ searchParams: { page, limit } }) => {
    const data = await getData(page as string, limit as string)

    // await new Promise(resolve => setTimeout(resolve, 100000))

    return (
        <>
            <div className='w-11/12 md:w-10/12 2xl:w-8/12 mx-auto flex flex-col font-dosis p-5 2xl:py-10 min-h-screen'>
                <div className='flex justify-between items-center'>
                    <Link href='/' className='text-3xl font-bold cursor-pointer'>{content.nav.logo}{' '}
                        <span className='w-3 h-3 bg-red-500 rounded-full inline-block'></span>
                    </Link>
                    <h1 className='font-bold text-xl md:text-3xl'>MyVisitor</h1>
                </div>
                <div className='mt-12 2xl:mt-16'>
                    <div className='overflow-x-auto rounded-2xl'>
                        {data && data.rows.length > 0 ?
                            <table className='align-middle w-max min-w-full'>
                                <thead>
                                    <tr className='border-b border-gray-200 dark:border-gray-700'>
                                        <th className='px-3 py-3'>#</th>
                                        <th className='px-3 py-3'>Visit Time</th>
                                        <th className='px-3 py-3'>Device</th>
                                        <th className='px-3 py-3'>Browser</th>
                                        <th className='px-3 py-3'>IP</th>
                                        <th className='px-3 py-3'>District</th>
                                        <th className='px-3 py-3'>City</th>
                                        <th className='px-3 py-3'>Region</th>
                                        <th className='px-3 py-3'>Country</th>
                                        <th className='px-3 py-3'>Country Code</th>
                                        <th className='px-3 py-3'>ISP</th>
                                        <th className='px-3 py-3'>ASN</th>
                                        <th className='px-3 py-3'>Latitude</th>
                                        <th className='px-3 py-3'>Longitude</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.rows.map((item, key) =>
                                        <tr key={key}>
                                            {/* <td className='px-3 py-2'>{key + 1 + ((Number(page) || 1 - 1) * Number(limit) || 10)}</td> */}
                                            <td className='px-3 py-2'>{((Number(page || 1) - 1) * Number(limit || 10)) + key + 1}</td>
                                            <td className='px-3 py-2'>{dayjs(item.visit_time).format('YYYY-MM-DD HH:mm:ss')}</td>
                                            <td className='px-3 py-2'>{item.device}</td>
                                            <td className='px-3 py-2'>{item.browser}</td>
                                            <td className='px-3 py-2'>{item.ip}</td>
                                            <td className='px-3 py-2'>{item.district}</td>
                                            <td className='px-3 py-2'>{item.city}</td>
                                            <td className='px-3 py-2'>{item.region}</td>
                                            <td className='px-3 py-2'>{item.country_name}</td>
                                            <td className='px-3 py-2 text-center'>{item.country_code}</td>
                                            <td className='px-3 py-2'>{item.isp}</td>
                                            <td className='px-3 py-2'>{item.asn}</td>
                                            <td className='px-3 py-2 text-center'>{item.latitude}</td>
                                            <td className='px-3 py-2'>{item.longitude}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            :
                            <div>Oops no data found.</div>
                        }
                    </div>
                    {/* <div className='font-semibold mt-5 -mb-2'>{data?.total_rows} data found.</div> */}
                    <PaginationPageSize currentPage={Number(page)} totalRows={data.total_rows} path='/visitor' />
                </div>
            </div>
        </>
    );
}

export default Page;