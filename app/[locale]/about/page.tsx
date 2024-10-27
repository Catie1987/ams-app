import React from 'react';
import AboutBanner from './about-banner';

export default function AboutPage() {
  return (
    <div className="w-full">
        <AboutBanner/>
        <section className="min-h-screen w-full flex flex-col items-center">
            This is About page
        </section>
    </div>
  )
}
