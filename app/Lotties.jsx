import React from 'react'
const Lottie = dynamic(() => import("lottie-react"), { ssr: false })
import animation from "./assets/loading.json"
import dynamic from 'next/dynamic'

const Lotties = () => {
  return (
    <div>
      <Lottie animationData={animation}
        loop={true}
        autoplay={true}
        size={200}
      ></Lottie>
    </div>
  )
}

export default Lotties
