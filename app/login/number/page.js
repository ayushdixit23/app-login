"use client";
import React, { useEffect, useRef, useState } from "react";
import { auth } from "../../../firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineReload } from "react-icons/ai";
import { useRouter } from "next/navigation";
import axios from "axios";
import { API } from "@/Essentials";
import { CgSpinner } from "react-icons/cg";
import Link from "next/link";
import Lotties from "@/app/Lotties";
import dynamic from "next/dynamic";
const DynamicOtpInput = dynamic(() => import("otp-input-react"), {
  ssr: false,
});

function page() {
  // const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  // const otpInputRefs = Array.from({ length: 6 }, () => React.createRef());
  // const otpElementRef = useRef(null);
  const [otp, setOtp] = useState("");
  const otpInputRef = useRef(null);
  const router = useRouter();
  const [number, setNumber] = useState("");
  // const [OTP, setOTP] = useState();
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(true);
  const [come, setCome] = useState(0);
  const [change, setChange] = useState(1);
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  const [load, setLoad] = useState(false);
  const [anim, setAnim] = useState(false);

  const handleOtpChange = (otp) => {
    try {
      setOtp(otp);
    } catch (error) {
      toast.error("Something Went Wrong!");
      console.log(error);
    }
  };

  useEffect(() => {
    let interval;

    if (seconds === 0) {
      setSeconds(0);
      setIsActive(true);
      setCome(come + 1);
    }
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      if (seconds === 0) {
        setSeconds(0);
        setCome(1);
      }
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    onSignup();
    setSeconds(30);
    //setIsActive(!isActive);
  };

  const fetchid = async () => {
    await axios
      .post(`${API}/signup-mobile`, { phone: "91" + number })
      .then(function (res) {
        if (res.data.success === true) {
          if (res.data.userexists) {
            if (window.ReactNativeWebView) {
              let a = JSON.stringify(res?.data);
              window.ReactNativeWebView.postMessage(a);
            }
            toast.success("Success");
          } else {
            if (window.ReactNativeWebView) {
              let data = {
                number: number,
                userexists: false,
                success: true,
              };
              let a = JSON.stringify(data);
              window.ReactNativeWebView.postMessage(a);
            }
            toast.error("Seems like you don't have an account in the app.");
          }
        } else {
          toast.error("Something went wrong...");
          setAnim(false);
        }
      })
      .catch(function (error) {
        console.log(error, "fetchid");
        setAnim(false);
        toast.error("Something went wrong...");
      });
  };

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            // Response expired. Ask the user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  }

  function onSignup() {
    setLoading(true);
    onCaptchaVerify();
    setSeconds(30);
    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+91" + number;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);

        toast.success("Otp Sent!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        setAnim(true);
        setLoading(false);
        fetchid();
      })
      .catch((err) => {
        console.log(err);
        setAnim(false);
        setLoading(false);
      });
  }

  return (
    <>
      {anim ? (
        <Lotties />
      ) : (
        <>
          {load ? (
            <>
              <div
                className="fixed inset-0 bg-[#81818117]
        w-full z-20"
              ></div>
              <div className="fixed inset-0 w-full h-screen">
                <div className="flex justify-center items-center h-[100vh]">
                  <div
                    className="animate-spin text-2xl
      "
                  >
                    <AiOutlineReload />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>
              <Toaster toastOptions={{ duration: 4000 }} />
              <div id="recaptcha-container"></div>
              {showOTP ? (
                // OTP
                <div className="items-center flex flex-col justify-between">
                  <div className="font-bold  pn:max-sm:text-[30px] text-[25px] text-[#313C58] ">
                    Verification
                  </div>
                  <div className="flex flex-col py-2 justify-center items-center">
                    <div className="text-[#96A0AD] text-[15px] pn:max-sm:text-[12px] ">
                      We’re sending an SMS to phone number
                    </div>
                    <div className="text-[#96A0AD] pn:max-sm:text-[12px] text-[15px] ">
                      <span className="text-[#0075FF]">+91{number}</span> Wrong
                      Number ?
                    </div>
                  </div>

                  {/* <>
                    <div className="mx-auto max-w-md w-full flex justify-center gap-2 p-10">
                      {otp.map((value, index) => (
                        <>
                          <input
                            key={`otp-field-${index}`}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                onOTPVerify();
                              }
                            }}
                            className="otp__digit otp__field md:hidden outline-slate-200 bg-slate-100 h-[50px] w-[50px] rounded-2xl flex justify-center items-center text-center text-[#3e3e3e]"
                            value={value}
                            onChange={(event) =>
                              handleInputChange(event, index)
                            }
                            ref={otpInputRefs[index]}
                            maxLength={1}
                            type="number"
                          />
                        </>
                      ))}
                    </div>
                  </> */}

                  <div ref={otpInputRef}>
                    <DynamicOtpInput
                      value={otp}
                      onChange={handleOtpChange}
                      OTPLength={6}
                      otpType="number"
                      // ref={otpInputRef}
                      disabled={false}
                      autoFocus
                      className="opt-container sm:mt-3"
                    ></DynamicOtpInput>
                  </div>
                  <div className="text-black flex text-[15px] pt-2">
                    <div className="text-center">
                      {come === 1 ? (
                        <div className="space-x-4 flex ">
                          <div className="text-[#3e3e3e]">
                            Don't receive code ?{" "}
                            <button
                              className={` text-blue-600 font-semibold rounded ${isActive ? "" : ""
                                }`}
                              onClick={toggleTimer}
                            >
                              Request Again
                            </button>
                          </div>
                        </div>
                      ) : (
                        <h1
                          className={`${come === 1 ? "hidden" : "text-[14px] text-[#3e3e3e]"
                            }`}
                        >
                          Resend: 00:{seconds}
                        </h1>
                      )}
                    </div>
                  </div>
                  <div
                    onClick={onOTPVerify}
                    className="h-[50px] w-[250px] select-none cursor-pointer bg-black mt-8 flex items-center justify-center rounded-2xl text-white"
                  >
                    {loading && (
                      <CgSpinner size={20} className="m-1 animate-spin" />
                    )}
                    <span className={`${loading ? "hidden" : ""}`}>
                      Continue
                    </span>
                  </div>
                </div>
              ) : (
                // Phone
                <div className=" bg-white  flex flex-col justify-between items-center">
                  <div className="font-bold text-center text-[25px] font-fugaz text-[#171717] ">
                    Start your Adventure.
                    <div className="text-[#0075ff]">Let's Begin!</div>
                  </div>
                  <div className="flex flex-col justify-center items-center  py-2">
                    <div className="text-[#96A0AD] text-[15px] pn:max-sm:text-[12px] text-center px-10">
                      We've missed you! Please sign in to catch up on what
                      you've missed
                    </div>
                  </div>

                  {/* phone */}
                  <div
                    className={`${change === 1
                      ? "flex justify-start flex-col  items-start  py-10"
                      : "hidden"
                      }`}
                  >
                    <div className="bg-[#f7f7f7] flex items-center justify-center rounded-2xl">
                      <div className="text-[#171717] pl-2">+91</div>
                      <div className="h-[20px] ml-2 border-r-2 border-slate-200" />
                      <input
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            onSignup();
                          }
                        }}
                        maxLength={10}
                        autoComplete={false}
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder="Phone no."
                        className="h-[50px] w-[260px] text-[#171717] outline-none bg-[#f7f7f7] rounded-r-2xl px-2 p-2 "
                      />
                    </div>
                  </div>
                  <div className={`${change === 1 ? "py-1" : "hidden"}`}>
                    <div
                      onClick={onSignup}
                      className="h-[50px] w-[300px] select-none cursor-pointer bg-black  flex items-center justify-center rounded-2xl text-white "
                    >
                      {loading && (
                        <CgSpinner size={20} className="m-1 animate-spin" />
                      )}
                      <span className={`${loading ? "hidden" : ""}`}>
                        Continue
                      </span>
                    </div>
                  </div>

                  {/* <div className="flex fixed bottom-10 text-[#414141] gap-4 text-[12px] select-none">
                    <Link href={"../terms"}>T&C</Link>
                    <Link href={"../privacy"}>Privacy</Link>
                    <Link href={"../contact"}>Contact Us</Link>
                    <Link href={"../shipping"}>Shipping</Link>
                    <Link href={"../cancellation"}>Cancellation</Link>
                  </div> */}
                  <div className="flex absolute bottom-[50px] w-[100%] flex-wrap justify-end items-center dark:text-white text-[#414141] gap-4 text-[12px] select-none">
                    <div className="flex sm:bottom-3 w-[50%] pn:max-sm:w-full p-2 flex-wrap  justify-center items-center  dark:text-white text-[#414141] gap-3 text-[12px] select-none">
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"../terms"}>T&C</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"../privacy"}>Privacy</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"../contact"}>Contact Us</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"/about"}>About</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"/requestdata"}>Request Data</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"/deleterequest"}>Delete Request</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"../shipping"}>Shipping</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"../cancellation"}>Cancellation</Link>
                      <Link className="text-[#414141] font-semibold text-[10px]" href={"../return"}>Return Policy</Link>
                    </div>
                  </div>
                </div>
              )}
              <div style={{ marginBottom: "50%" }} />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default page;
