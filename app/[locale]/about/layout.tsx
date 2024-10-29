import React from 'react';
import AboutBanner from './about-banner';
import BreadCrumb from '../components/breadcrumb';

const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className='w-full'>
        <AboutBanner/>
        <section className="min-h-screen w-full flex flex-col items-center">
            <div className='w-full max-w-7xl px-4'>
                <BreadCrumb/>
                {children}
            </div>
        </section>
    </div>
  );
};

export default AboutLayout;