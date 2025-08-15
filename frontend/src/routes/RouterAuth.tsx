import Login from "@/pages/auth/Login";
import LoginForPassword from "@/pages/auth/LoginForPassword";
import OTPVerification from "@/pages/auth/OTPVerification";
import Register from "@/pages/auth/Register";
import RegisterStep2 from "@/pages/auth/RegisterStep2";
import RegisterStep3 from "@/pages/auth/RegisterStep3";
import RegisterStep4 from "@/pages/auth/RegisterStep4";


export const RouterAuth = [
            {
                path: "/auth/login",
                element: <Login/>
            },
            {
                path: "/auth/login/otp",
                element: <OTPVerification/>
            },
            {
                path: "/auth/login/for-password",
                element: <LoginForPassword/>
            },
            {
                path: "/auth/signup",
                element: <Register/>
            },
            {
                path: "/auth/signup/step-2",
                element: <RegisterStep2/>
            },
            {
                path: "/auth/signup/step-3",
                element: <RegisterStep3/>
            },
            {
                path: "/auth/signup/step-4",
                element: <RegisterStep4/>
            },

]