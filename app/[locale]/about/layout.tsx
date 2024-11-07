"use client"
import React  from 'react';
import AboutBanner from './about-banner';
import BreadCrumb from '../components/breadcrumb';
import LoadingSpinner from '../components/ui/Loading';
import { useEffect, useState } from 'react';

const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate a data-fetching process with a timeout
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000); // Adjust the delay as needed
    
        return () => clearTimeout(timer); // Cleanup the timer on component unmount
      }, []);
    
      if (isLoading) {
        return <LoadingSpinner />;
      }
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