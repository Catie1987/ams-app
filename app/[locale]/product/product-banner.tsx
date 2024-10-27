import React from 'react';
import Image from 'next/image';
import banner from '../../assets/image/bannerproduct.jpg'

const ProductBanner = () => {
  return (
    <div className="relative h-[50vh] w-full flex items-center justify-center">
            <Image
              src={banner}
              alt="Background"
              
              quality={100}
              className="z-0 object-cover w-full h-full"  // Make sure the image is behind the gradient
            />
            <div className="absolute inset-0 w-full bg-gradient-to-r from-[--gradient2] to-[--gradient1] z-10"></div>
    </div>
  )
}

export default ProductBanner;