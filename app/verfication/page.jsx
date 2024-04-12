"use client"
import React, { Suspense } from 'react'
import dynamic from "next/dynamic";
import Loading from '@/Loading';
const Component = dynamic(() => import("./component"), {
	ssr: false,
});

const page = () => {
	return (
		<Suspense fallback={<Loading />}
		>
			<Component />
		</Suspense>
	)
}

export default page
