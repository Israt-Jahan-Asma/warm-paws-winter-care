import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import Profile from "../pages/Profile";
import ForgetPassword from "../components/ForgetPassword";

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
                    loader:()=>fetch('/service.json')
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
