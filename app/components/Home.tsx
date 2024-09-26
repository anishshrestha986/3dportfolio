'use client'
import Spline from '@splinetool/react-spline';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import Loading from '../loading';

export default function HomeComponent() {
  const router = useRouter()
  return (
     <Suspense fallback={<Loading/>}>
      <Spline
      onSplineKeyUp={(event) => {
        if(event.target.id==="cc3b00a2-a7d6-49fb-8542-815b56e4448b") {
          console.log(event)
          setTimeout(() => {
          router.push('/dashboard')},2000)
      }}}
        scene="https://prod.spline.design/GVwq7dDLNQPtukWM/scene.splinecode" 
      />
      </Suspense>
  );
  
}