'use client'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

export default function HomeComponent() {
  const router = useRouter()
const Spline = dynamic(() => import('@splinetool/react-spline/next'), )
  return (
    <div>
      <Spline
      onSplineKeyUp={(event) => {
        if(event.target.id==="cc3b00a2-a7d6-49fb-8542-815b56e4448b") {
          console.log(event)
          setTimeout(() => {
          router.push('/dashboard')},2000)
      }}}
        scene="https://prod.spline.design/GVwq7dDLNQPtukWM/scene.splinecode" 
      />
    </div>
  );
  
}