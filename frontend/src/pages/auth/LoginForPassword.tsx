import { loginSchema } from '@/common/validation/authSchema'
import axiosInstance from '@/configs/axios'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const LoginForPassword = () => {
    const nav = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: zodResolver(loginSchema)})
    const onSubmit = async (data: any) => {
        try {
            const res =  await axiosInstance.post("/login", data);
            if(res) {
                localStorage.setItem("accessToken", res.data.accessToken)
                localStorage.setItem("user", JSON.stringify({
                    id: res.data.user.id,
                    name: res.data.user.ho + " " + res.data.user.ten,
                    email: res.data.user.email,
                    role: res.data.user.role
                }));
                toast.success("Đăng nhập thành công")
                nav("/")
            }
        } catch (error) {
            console.error(error);
        }

    }
    const [showPassword, setShowPassword] = useState(false)
      const togglePassword = () => setShowPassword(!showPassword)
  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black rounded-lg p-8 text-white text-center shadow-lg">
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/02/Spotify_Logo_CMYK_Green.png"
          alt="Spotify"
          className="w-12 mx-auto mb-6"
        />
        <h1 className="text-2xl font-bold mb-6">Log in to Spotify</h1>

        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center border border-gray-500 rounded-full py-2 hover:bg-gray-800 transition">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 mr-2"
            />
            Continue with Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-500 rounded-full py-2 hover:bg-gray-800 transition">
            <img
              src="https://www.svgrepo.com/show/448224/facebook.svg"
              alt="Facebook"
              className="w-5 mr-2"
            />
            Continue with Facebook
          </button>
          <button className="w-full flex items-center justify-center border border-gray-500 rounded-full py-2 hover:bg-gray-800 transition">
            <img
              src="https://www.svgrepo.com/show/303128/apple-logo.svg"
              alt="Apple"
              className="w-5 mr-2"
            />
            Continue with Apple
          </button>
          <button className="w-full flex items-center justify-center border border-gray-500 rounded-full py-2 hover:bg-gray-800 transition">
            Continue with phone number
          </button>
        </div>

        <hr className="border-gray-700 my-6" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-1">
              Email or username
            </label>
            <input
              type="text"
              id="email"
              {...register("email", { required: "This field is required" })}
              className="w-full h-12 bg-black text-white border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-bold mb-1">
              Password
            </label>
            <div className='relative'>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", { required: "This field is required" })}
              className="w-full h-12 bg-black text-white border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
            <button
                type='button'
                className='absolute right-3 top-2.5 text-gray-400'
                onClick={togglePassword}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
              </div>
          </div>

          <Link to={"/auth/login/otp"}
            type="submit"
            className="w-full bg-green-500 text-black font-bold text-center py-2 rounded-full hover:bg-green-400 transition"
          >
            Continue
          </Link>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-white underline hover:text-green-400 transition"
          >
            Sign up for Spotify
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginForPassword
