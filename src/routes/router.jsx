import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";

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
                }
            ]
        },
        {
            path: 'service',
            element: <h2> Services</h2>
        },
        {
            path: 'profile',
            element: <h2> My profile</h2>
        },
    ]
)
export default router;
