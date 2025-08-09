import { ChevronLeft, Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterStep2 = () => {
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

        <div className='flex items-center gap-3 mb-6'>
          <div className='w-full h-1 bg-gray-700 relative rounded'>
            <div
              className='absolute top-0 left-0 h-full bg-green-500 rounded'
              style={{ width: '33%' }}
            />
          </div>
        </div>
        <div className='flex items-start gap-2 mb-6'>
          <Link to={"/auth/signup"}>
            <ChevronLeft className='text-white cursor-pointer mt-1' />
          </Link>

          <div>
            <h2 className='text-sm text-gray-400 font-semibold leading-none'>Step 1 of 3</h2>
            <h1 className='text-xl font-bold leading-tight'>Create a password</h1>
          </div>
        </div>


        <form className='space-y-6'>
          <div>
             <label htmlFor="password" className="block text-sm font-bold mb-1">
              Password
            </label>

            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                className="w-full h-12 bg-black text-white border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type='button'
                className='absolute right-3 top-2.5 text-gray-400'
                onClick={togglePassword}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <div className='space-y-2 text-sm'>
            <p className='font-bold'>Your password must contain at least</p>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                id="password-rule-radio"
                disabled
                className='form-radio text-green-500'
                title="Password must contain at least 1 letter"
                aria-label="Password must contain at least 1 letter"
              />
              <span>1 letter</span>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                id="password-rule-radio"
                disabled
                className='form-radio text-green-500'
                title="Password must contain at least 1 letter"
                aria-label="Password must contain at least 1 letter"
              />
              <span> 1 number or special character (example: <code># ? ! &</code>)</span>
            </div>
            <div className='flex items-center gap-2'>
              <input
                type="radio"
                id="password-rule-radio"
                disabled
                className='form-radio text-green-500'
                title="Password must contain at least 1 letter"
                aria-label="Password must contain at least 1 letter"
              />
              <span>10 characters</span>
            </div>
          </div>

          <Link to={"/auth/signup/step-3"} type='submit' className='w-full bg-green-500 text-black font-bold py-2 text-center rounded-full hover:bg-green-400 transition'>
            Next
          </Link>
        </form>
      </div>
    </div>
  )
}

export default RegisterStep2
