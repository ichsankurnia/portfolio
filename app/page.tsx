import { FC } from 'react';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import Project from '@/components/Project';
import Work from '@/components/Work';
import Header from '@/components/Header';

type Props = {};

const Page: FC<Props> = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      {/* <Stack /> */}
      <Work />
      <Project />
      <Contact />
    </>
  );
}

export default Page;