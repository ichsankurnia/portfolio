import { FC } from 'react';

type Props = {};

const Page: FC<Props> = () => {
    return (
        <>
            <div className="h-screen">
                <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSNOwzgFOwN6ZUkUkbjQEQAxkJQ7BpsyDYxXFZffeVwcnapgkyP4qhFLJLBC6ZNAVT0V_kW2MnKQove/embed?start=true&loop=true&delayms=3000" frameBorder="0" allowFullScreen title='UX Design Course by Google' className='w-full h-full'></iframe>
                {/* <iframe className='w-full h-full' title='UX Design Course by Google' src='https://docs.google.com/presentation/d/1eLwOP3AjrulI7VuF3BLCNTHFjSXtVtF5ptcuF6oHYW0/edit?usp=sharing'></iframe> */}
            </div>
        </>
    );
}

export default Page;