import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginSchema} from "@/common/validation/authSchema";
import {toast} from "react-toastify";
import axiosInstance from "@/configs/axios";

const Login = () => {
    const nav = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: zodResolver(loginSchema)})
    const onsubmit = async (data: any) => {
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
  return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Sign In
              </h2>
              <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                      </label>
                      <input
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                          placeholder="your@email.com"
                          {...register("email")}
                      />
                      {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                      </label>
                      <input
                          type="password"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                          placeholder="••••••••"
                          {...register("password")}
                      />
                      {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                  </div>
                  <div className="flex items-center justify-between">
                      <label className="flex items-center">
                          <input
                              type="checkbox"
                              className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-sm text-gray-600">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                      </a>
                  </div>
                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
                      Sign In
                  </button>
              </form>
              <div className="mt-6 text-center text-sm text-gray-600">
                  Don't have an account?
                  <Link to="/auth/register" className="text-indigo-600 hover:text-indigo-500 font-medium">
                      Sign up
                  </Link>
              </div>
          </div>
      </div>

  );
};

export default Login;
