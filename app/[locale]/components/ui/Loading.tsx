import React from 'react';
import {BeatLoader} from 'react-spinners';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
    <BeatLoader
     color="#060eb9" 
     loading={true} 

    />
  </div>
  )
}