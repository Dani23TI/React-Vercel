import React from "react";
import "./assets/tailwind.css"
// import Dashboard from './pages/Dashboard';
// import Customers from './pages/Customers';
// import Orders from './pages/Orders';
// import NotFound from './pages/NotFound';
import Error400 from './pages/Error400';
import Error401 from './pages/Error401';
import Error403 from './pages/Error403';
// import ErrorPage from './pages/ErrorPage';
import {Route, Routes} from "react-router-dom";
import { Suspense } from "react";
import Loading from "./components/Loading";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";


const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const User = React.lazy(() => import("./pages/User"));



function App() {

  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/error400" element={<Error400 />} />
        <Route path="/error401" element={<Error401 />} />
        <Route path="/error403" element={<Error403 />} />
        <Route path="/users" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>

      <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
            <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
    </Suspense>
  )
}

export default App
