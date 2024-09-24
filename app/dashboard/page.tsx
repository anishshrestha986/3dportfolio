import dynamic from 'next/dynamic';
import React from 'react';

export default function Dashboard() {
  
const Spline = dynamic(() => import('@splinetool/react-spline/next') )
  return (
    <div>
      <Spline
        scene="https://prod.spline.design/RD5O6wrK6Y3vb5UA/scene.splinecode" 
      />
    </div>
  );
}