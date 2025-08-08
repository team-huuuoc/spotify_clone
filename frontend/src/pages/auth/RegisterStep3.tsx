import { ChevronLeft, Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterStep3 = () => {
    const [showPassword, setShowPassword] = useState(false)
    const togglePassword = () => setShowPassword(!showPassword)
    return (
        <div className='min-h-screen bg-[#121212] flex items-center justify-center px-4'>
            <div className='w-full max-w-md text-white'>
                <div className='flex justify-center mb-4'>
                    <img
                        src="https://tse2.mm.bing.net/th/id/OIP.j68VRFGhDH6y5kO4XKaj1AHaHa?pid=Api&P=0&h=180"
                        alt="Spotify"
                        className="w-12 mx-auto mb-6"
                    />
                </div>

                <div className='w-full h-1 bg-gray-700 mb-6 relative rounded'>
                    <div
                        className='absolute top-0 left-0 h-full bg-green-500 rounded'
                        style={{ width: '66%' }}
                    />
                </div>

                <div className='flex items-start gap-2 mb-6'>
                    <Link to={"/auth/signup/step-2"}>
                        <ChevronLeft className='text-white cursor-pointer mt-1' />
                    </Link>

                    <div>
                        <h2 className='text-sm text-gray-400 font-semibold leading-none'>Step 2 of 3</h2>
                        <h1 className='text-xl font-bold leading-tight'>Tell us about yourself</h1>
                    </div>
                </div>

                <form className='space-y-6'>
                    <div>
                        <label htmlFor="username" className='block text-sm font-semibold mb-1'>
                            Username
                        </label>
                        <p className='text-sm text-gray-400 mb-2'>This name will appear on your profile</p>

                        <div className='relative'>
                            <input
                                type="text"
                                id='username'
                                className='w-full px-4 py-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500'
                            />

                        </div>
                    </div>

                    <div>
                        <label htmlFor="dob" className="block text-sm font-semibold mb-1">
                            Date of birth
                        </label>
                        <p className="text-sm text-gray-400 mb-2">
                            Why do we need your date of birth?{' '}
                            <a href="#" className="underline hover:text-white">
                                Learn more.
                            </a>
                        </p>

                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="dd"
                                maxLength={2}
                                className="w-1/4 px-4 py-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            <select
                                className="w-2/4 px-4 py-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                                defaultValue=""
                                aria-label="Month"
                            >
                                <option value="" disabled>
                                    Month
                                </option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>

                            <input
                                type="text"
                                placeholder="yyyy"
                                maxLength={4}
                                className="w-1/4 px-4 py-2 border border-gray-600 rounded bg-black text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>
                    </div>


                    <button type='submit' className='w-full bg-green-500 text-black font-bold py-2 rounded-full hover:bg-green-400 transition'>
                        Đăng ký
                    </button>
                </form>
            </div>
        </div>
    )
}

export default RegisterStep3
