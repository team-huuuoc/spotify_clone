import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PublicClient} from "@/routes/RouterClient";
import NotPound from "@/components/404/NotPound";
import {RouterAuth} from "@/routes/RouterAuth";
import {PrivateAdmin} from "@/routes/RouterAdmin";

const Router = () => {
    const router = createBrowserRouter([...PublicClient,...RouterAuth,...PrivateAdmin, {
        path: "*",
        element: <NotPound/>
    }])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
};

export default Router;
