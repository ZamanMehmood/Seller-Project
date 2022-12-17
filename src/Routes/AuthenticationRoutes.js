// import { lazy } from 'react';

// project imports
// import Loadable from 'ui-component/Loadable';

// login option routing

import AuthLayout from './../AuthLayout/index';
import Login from '../Components/Login/login'
// const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <AuthLayout />,
    children: [
        {
            path: '/login',
            element: <Login />
        },
        // {
        //     path: '/pages/register/register3',
        //     element: <AuthRegister3 />
        // }
    ]
};

export default AuthenticationRoutes;
