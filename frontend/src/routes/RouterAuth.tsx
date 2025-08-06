import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";


export const RouterAuth = [
            {
                path: "/auth/login",
                element: <Login/>
            },
            {
                path: "/auth/register",
                element: <Register/>
            },

]