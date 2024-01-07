import React from 'react';
import Footer from './footer';
import Header from './header';

interface Props {
  children: React.ReactNode;
}
const LayoutWebsite = ({ children }: Props) => {
  return (
    <React.Fragment>
      <main className='min-h-screen max-w-screen mx-auto flex flex-col justify-center items-center'>
        <Header />
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default LayoutWebsite;
