import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const OTPVerification = () => {
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp]
        newOtp[index] = value;
        setOtp(newOtp)

        const nextInput = document.getElementById(`otp-input-${index + 1}`);
        if (value && nextInput) nextInput.focus();
    }

    const handleSubmit = () => {
        const code = otp.join("");
        console.log("Ma xac nhan: ", code);
    }
    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
            <div className='text-white text-center max-w-md w-full'>
                {/* <img
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/02/Spotify_Logo_CMYK_Green.png"
                    alt="Spotify"
                    className="w-8 mb-8"
                /> */}
                <h2 className="text-lg sm:text-xl font-bold mb-4">
                    Enter the 6-digit code sent to you at{" "}
                    <span className="font-normal">t******6@f*du.vn.</span>
                </h2>

                <div className='flex justify-center gap-2 mb-4'>
                    {otp.map((digit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <label htmlFor={`otp-${index}`} className="sr-only">
                                OTP Digit {index + 1}
                            </label>
                            <input
                                type="text"
                                id={`otp-${index}`}
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                className='w-12 h-14 text-2xl text-center bg-black border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500'

                            />
                        </div>
                    ))}
                </div>

                <button className='text-sm font-semibold mb-6 hover:underline text-white'>
                    Resend code
                </button>

                <button
                    onClick={handleSubmit}
                    className='w-full bg-green-500 text-black font-bold py-3 rounded-full hover:bg-green-400 transition'
                >
                    Login
                </button>

                <Link to={"/auth/login/for-password"} className="text-sm mt-6 font-semibold hover:underline cursor-pointer text-white">
                    Log in with a password
                </Link>
            </div>
        </div>
    )
}

export default OTPVerification
