import React from 'react';
import ContactBanner from './contact-banner';

export default function ContactPage() {
  return (
    <div className="w-full">
        <ContactBanner/>
        <section className="min-h-screen w-full flex flex-col items-center">
            This is Contact
        </section>
    </div>
  )
}
