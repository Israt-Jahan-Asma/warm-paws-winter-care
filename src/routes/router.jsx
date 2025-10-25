import { createBrowserRouter, UNSAFE_WithHydrateFallbackProps } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile";
import ForgetPassword from "../components/ForgetPassword";
import { PropagateLoader } from "react-spinners";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout></MainLayout>,
            children:[
                {
                    path:'/',
                    element: <Home />  
                },
                {
                    path: '/service-details/:id',
                    element: <PrivateRoute>
                        <ServiceDetails></ServiceDetails> 
                    </PrivateRoute> ,
                    loader:()=>fetch('/service.json'),
                    hydrateFallbackElement: <PropagateLoader color="#E1875E" />
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                },
                {
                    path: 'profile',
                    element: <PrivateRoute>
                        <Profile></Profile>
                    </PrivateRoute>
                },
                {
                    path: 'forget-password',
                    element: <ForgetPassword></ForgetPassword>
                }
            ]
        },
        
    ]
)
export default router;
