import React from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {registerSchema} from "@/common/validation/authSchema";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import axiosInstance from "@/configs/axios";
import {IUser} from "@/common/types/User";

const Register = () => {
    const nav = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({resolver: zodResolver(registerSchema)})
    const onsubmit = async (data: IUser) => {
        try {
             await axiosInstance.post("/register", data);
            toast.success("Đăng ký thành công")
            nav("/auth/login")
        } catch (error) {
            console.error(error);
        }
        
    }
  return (
      <>
          <div className="container mx-auto py-8">
              <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
              <form onSubmit={handleSubmit(onsubmit)} className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                  <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="name"
                      >
                          Họ
                      </label>
                      <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                          type="text"
                          id="ho"
                          placeholder="John Doe"
                          {...register("ho")}
                      />
                      {errors.ho && <p className="text-red-500 text-xs italic">{errors.ho.message}</p>}
                  </div>
                  <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="name"
                      >
                          Tên
                      </label>
                      <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                          type="text"
                          id="ten"
                          placeholder="John Doe"
                          {...register("ten")}
                      />
                      {errors.ten && <p className="text-red-500 text-xs italic">{errors.ten.message}</p>}
                  </div>
                  <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="email"
                      >
                          Email
                      </label>
                      <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                          type="email"
                          id="email"
                          placeholder="john@example.com"
                          {...register("email")}
                      />
                      {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                  </div>
                  <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password"
                      >
                          Password

                      </label>
                      <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                          type="password"
                          id="password"
                          placeholder="********"
                          {...register("password")}
                      />
                      {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                  </div>
                  <div className="mb-4">
                      <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="password_confirmation"
                      >
                          Confirm Password
                      </label>
                      <input
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                          type="password"
                          id="password_confirmation"
                          placeholder="********"
                          {...register("password_confirmation")}
                      />
                      {errors.password_confirmation && <p className="text-red-500 text-xs italic">{errors.password_confirmation.message}</p>}
                  </div>
                  <div className="mb-4">
                      <label className="inline-flex items-center">
                          <input type="checkbox" {...register("checkboxs")} className="form-checkbox text-indigo-600" />
                          <span className="ml-2 text-sm text-gray-600">Tôi đồng ý với các điều khoản</span>
                      </label>
                      {errors.checkboxs && <p className="text-red-500 text-xs italic">{errors.checkboxs.message}</p>}
                  </div>
                  <button
                      className="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
                      type="submit"
                  >
                      Register
                  </button>
              </form>
          </div>
      </>

  );
};

export default Register;
