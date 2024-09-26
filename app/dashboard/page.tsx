'use client'
import Spline from '@splinetool/react-spline';
import React, { Suspense } from 'react';
import Loading from '../loading';
import { useRouter } from 'next/navigation';
export default function Dashboard() {
  const router = useRouter()
  
  return (
    <Suspense fallback={<Loading/>}>
      <Spline
       onSplineKeyUp={(event) => {
        if(event.target.id==="09144e32-6f45-4e0a-8b66-2b7d9e49c1b8") {
          console.log(event)
          setTimeout(() => {
          router.push('/projects')},1000)
      }}}
        scene="https://prod.spline.design/RD5O6wrK6Y3vb5UA/scene.splinecode" 
      />

      </Suspense>
  );
}