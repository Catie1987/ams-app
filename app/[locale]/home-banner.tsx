import React from 'react';
import Image from 'next/image';
import banner1 from '../assets/image/banner1.jpg'

const HomeBanner = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center">
            <Image
              src={banner1}
              alt="Background"
              priority
              quality={100}
              className="z-0 object-cover w-full h-full"  // Make sure the image is behind the gradient
            />
            <div className="absolute inset-0 w-full bg-gradient-to-r from-[--gradient2] to-[--gradient1] z-10"></div>
    </div>
  )
}

export default HomeBanner;