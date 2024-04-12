"use client";
import dynamic from "next/dynamic";
import React from "react";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import loading from "./app/assets/newloading.json";

const Loading = () => {
	return (
		<>
			<div className="fixed inset-0 w-screen flex justify-center items-center h-screen z-30">
				<div>
					<Lottie animationData={loading} size={250} loop></Lottie>
				</div>
			</div>
		</>
	);
};

export default Loading;
