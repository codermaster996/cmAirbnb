import React from "react";
import { Navigate } from "react-router-dom";

import Demo from "@/views/demo";
const Home = React.lazy(() => import("@/views/home"));
const Entire = React.lazy(() => import("@/views/entire"));
const Detail = React.lazy(() => import("@/views/detail"));


const router = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/home',
    element: <Navigate to='/' />
  },
  {
    path: '/entire',
    element: <Entire />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '/demo',
    element: <Demo />
  },
  // 重定向
  {
    path: '*',
    element: <Navigate to='/' />
  }
]

export default router