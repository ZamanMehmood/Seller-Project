// import { lazy } from 'react';

// project imports
import MainLayout from '../Layout';

// dashboard routing
import Dashboard from '../Components/Dashboard'

// sample page routing
// const SamplePage = Loadable(lazy(() => import('views/sample-page')));
import ListProduct from './../Components/Products/ListProduct/index';
import Orders from './../Components/Orders/index';
import Customers from './../Components/Customers/index';
import AddProduct from './../Components/Products/CreateProduct/index';
// import EditProduct from './../Components/Products/EditProduct/index';
import EditProduct from './../Components/Products/ProductForm/EditProduct'
import Category from './../Components/Category/index';
import Profile from '../Layout/Header/profile';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/products',
            element: <ListProduct />
        },
        {
            path: '/add-product',
            element: <AddProduct />
        },
        // {
        //     path: '/edit-product/:id',
        //     element: <EditProduct />
        // },
        {
            path: '/edit-product/:id',
            element: <EditProduct />
        },
        {
            path: '/delete-product/:id',
            element: <ListProduct />
        },
        {
            path: '/category',
            element: <Category />
        },
        {
            path: '/orders',
            element: <Orders />
        },
        {
            path: '/customers',
            element: <Customers />
        },
        {
            path: '/marketing',
            element: <Dashboard />
        },
        {
            path: '/analytics',
            element: <Dashboard />
        },
        {
            path: '/chat',
            element: <Dashboard />
        },
        {
            path: '/blogs',
            element: <Dashboard />
        },
        {
            path: '/settings',
            element: <Dashboard />
        },
        {
            path: '/profile',
            element: <Profile />
        }
    ]
};

export default MainRoutes;
