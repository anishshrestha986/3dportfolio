import Spline from '@splinetool/react-spline';
import React, { Suspense } from 'react';

export default function Dashboard() {
  
  return (
    <Suspense fallback={<div className='text-[10rem] text-black'>Loading...</div>}>
      <Spline
        scene="https://prod.spline.design/RD5O6wrK6Y3vb5UA/scene.splinecode" 
      />

      </Suspense>
  );
}