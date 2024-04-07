"use client"
import React, { Suspense } from 'react'
import dynamic from "next/dynamic";
const Component = dynamic(() => import("./component"), {
	ssr: false,
});

const page = () => {
	return (
		<Suspense fallback={<><div className='flex justify-center items-center h-screen'>
			Loading...</div></>}
		>
			<Component />
		</Suspense>
	)
}

export default page
