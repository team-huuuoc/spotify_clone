import React, { useState, useRef } from "react";
import axiosInstance from "@/configs/axios"; // import axios cấu hình sẵn
import { toast } from "react-toastify"; // nếu muốn hiện thông báo
import { useNavigate } from "react-router-dom";

const RegisterStep4 = () => {
    const nav = useNavigate()
    const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
    const email = sessionStorage.getItem('signupEmail');
    const password = sessionStorage.getItem('signupPassword');
    const name = sessionStorage.getItem('signupUsername');
    const dob = sessionStorage.getItem('signupDob');
    const handleChange = (value: string, index: number) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, otp.length);
        if (!pasteData) return;

        const pasteArray = pasteData.split("");
        const newOtp = [...otp];
        pasteArray.forEach((digit, i) => {
            if (i < otp.length) newOtp[i] = digit;
        });
        setOtp(newOtp);

        const lastIndex = pasteArray.length - 1;
        if (lastIndex < otp.length) {
            inputsRef.current[lastIndex]?.focus();
        }
    };

    const handleSendCode = async () => {
        try {
            setLoading(true);

            if (!email) {
                toast.error("Email không tồn tại trong phiên làm việc.");
                setLoading(false);
                return;
            }

            const res = await axiosInstance.post("/otp/request", { email });

            toast.success("OTP đã được gửi đến email của bạn!");
            console.log("Kết quả gửi OTP:", res.data);
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Gửi OTP thất bại!");
            console.error("Lỗi gửi OTP:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleSubmit = async () => {
        const code = otp.join("");
        if (!email || !password || !name || !dob) {
            toast.error("Thiếu thông tin đăng ký. Vui lòng thử lại.");
            return;
        }
        try {
            setLoading(true);
            const payload = {
                email,
                password,
                name,
                dateOfBirth: dob,
                code,
            };
            const res = await axiosInstance.post("/auth/register/email", payload);
            toast.success("Đăng ký thành công!");

            // Xóa dữ liệu trong sessionStorage
            sessionStorage.removeItem("signupEmail");
            sessionStorage.removeItem("signupPassword");
            sessionStorage.removeItem("signupUsername");
            sessionStorage.removeItem("signupDob");

            // Có thể redirect hoặc làm gì tiếp theo ở đây
            nav("/auth/login");
            console.log("Kết quả đăng ký:", res.data);
        } catch (error: any) {
            toast.error(error?.response?.data?.message || "Đăng ký thất bại!");
            console.error("Lỗi đăng ký:", error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
            <div className="text-white text-center max-w-md w-full">
                <h2 className="text-lg sm:text-xl font-bold mb-4">
                    Enter the 6-digit code sent to you at{" "}
                    <span className="font-normal">t******6@f*du.vn.</span>
                </h2>

                <div className="flex justify-center gap-2 mb-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => {
                                inputsRef.current[index] = el;
                            }}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            onPaste={handlePaste}
                            className="w-12 h-14 text-2xl text-center bg-black border border-gray-500 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-green-500 
                         transition-all duration-150 ease-in-out focus:scale-105"
                        />
                    ))}
                </div>

                <button
                    onClick={handleSendCode}
                    disabled={loading}
                    className="text-sm font-semibold mb-6 hover:underline text-white disabled:opacity-50"
                >
                    {loading ? "Sending..." : "Send code"}
                </button>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-green-500 text-black font-bold py-3 rounded-full hover:bg-green-400 transition disabled:opacity-50"
                >
                    {loading ? "Signing up..." : "Sign up"}
                </button>

            </div>
        </div>
    );
};

export default RegisterStep4;
