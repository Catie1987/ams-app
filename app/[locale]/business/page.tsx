import React from 'react';
import BusinessBanner from './business-banner';

export default function BusinessPage() {
  return (
    <div className="w-full">
        <BusinessBanner/>
        <section className="min-h-screen w-full flex flex-col items-center">
            This is Business Page
        </section>
    </div>
  )
}
