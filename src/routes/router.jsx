import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
                    element: <ServiceDetails></ServiceDetails>  ,
                    loader:()=>fetch('/service.json')
                },
                {
                    path: 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element: <Register></Register>
                }
            ]
        },
        
    ]
)
export default router;
