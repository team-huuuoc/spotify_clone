import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/common/validation/authSchema";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "@/configs/axios";

const Register = () => {
    const nav = useNavigate();
    const [emailExists, setEmailExists] = useState(false);
    const [checkingEmail, setCheckingEmail] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setError,
        clearErrors,
        formState: { errors }
    } = useForm({ resolver: zodResolver(registerSchema) });

    const emailValue = watch("email");

    const checkEmail = async () => {
        if (!emailValue) return true;

        setCheckingEmail(true);
        try {
            const res = await axiosInstance.post(`/user/email`, { email: emailValue });

            if (res.status === 200) {
                // Email tồn tại
                setEmailExists(true);
                setError("email", { type: "manual", message: "Email đã tồn tại" });
                return true;
            }

            // Email chưa tồn tại => clear lỗi + LƯU email + chuyển trang
            setEmailExists(false);
            clearErrors("email");
            sessionStorage.setItem('signupEmail', emailValue); // 👈 lưu email tạm
            nav("/auth/signup/step-2");
            return false;
        } catch (error: any) {
            if (error.response?.status === 404) {
                // 404 nghĩa là email chưa tồn tại
                setEmailExists(false);
                clearErrors("email");
                sessionStorage.setItem('signupEmail', emailValue); // 👈 lưu email tạm
                nav("/auth/signup/step-2");
                return false;
            }
            console.error(error);
            return true;
        } finally {
            setCheckingEmail(false);
        }
    };


    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
            <div className="w-full max-w-md text-white text-center">
                <img
                    src="https://tse2.mm.bing.net/th/id/OIP.j68VRFGhDH6y5kO4XKaj1AHaHa?pid=Api&P=0&h=180"
                    alt="Spotify"
                    className="w-12 mx-auto mb-6"
                />
                <h1 className="text-6xl font-bold mb-4">Sign up to</h1>
                <h2 className="text-6xl font-bold mb-8">start listening</h2>

                <form onSubmit={handleSubmit(() => checkEmail())} className="space-y-4 text-left">

                    <div>
                        <label htmlFor="email" className="block text-sm font-bold mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@domain.com"
                            {...register("email")}
                            onBlur={checkEmail}
                            className="w-full h-14 bg-black text-white border border-gray-500 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        {checkingEmail && <p className="text-gray-400 text-sm mt-1">Đang kiểm tra...</p>}
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <a href="#" className="text-green-500 text-sm underline hover:text-green-400">
                        Use phone number instead.
                    </a>

                    <button
                        type="submit"
                        disabled={checkingEmail}

                        className={`w-full font-bold text-center py-2 rounded-full transition 
                            ${emailExists || checkingEmail ? "bg-gray-600 cursor-not-allowed" : "bg-green-500 hover:bg-green-400 text-black"}`}
                    >
                        Next
                    </button>

                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-gray-600" />
                        <span className="mx-3 text-gray-400 text-sm">or</span>
                        <hr className="flex-grow border-gray-600" />
                    </div>

                    <button
                        type="button"
                        className="w-full border border-gray-500 py-2 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                    >
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 mr-2" />
                        <span>Sign up with Google</span>
                    </button>

                    <button
                        type="button"
                        className="w-full border border-gray-500 py-2 rounded-full flex items-center justify-center hover:bg-gray-800 transition"
                    >
                        <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" alt="Apple" className="w-5 mr-2" />
                        <span>Sign up with Apple</span>
                    </button>
                </form>

                <p className="text-sm text-gray-400 mt-6">
                    Already have an account?{" "}
                    <a href="#" className="text-white underline hover:text-green-400">Log in here.</a>
                </p>
            </div>
        </div>
    );
};

export default Register;  