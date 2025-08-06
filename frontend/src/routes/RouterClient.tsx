import LayoutClient from "@/layouts/LayoutClient";
import Home from "@/pages/client/home/Home";

export const PublicClient = [
    {
        path: "/",
        element: <LayoutClient/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
       
        ]
    }
]