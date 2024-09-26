import Spline from '@splinetool/react-spline';
import React, { Suspense } from 'react';
import Loading from '../loading';

export default function Projects() {
  
  return (
    <Suspense fallback={<Loading/>}>
      <Spline
        scene="https://prod.spline.design/DKk3ps8gJMFhfeXX/scene.splinecode" 
      />

      </Suspense>
  );
}