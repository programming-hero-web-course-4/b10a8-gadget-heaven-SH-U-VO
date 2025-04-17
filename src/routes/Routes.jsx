import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home"
import Cards from "../components/Cards";
import CardDetails from "../pages/CardDetails";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('../categories.json'),
                children: [
                    {
                        path:'/',
                        element:<Cards />,
                        loader: () => fetch('../fakeData.json')
                    },
                    {
                        path: '/category/:category',
                        element: <Cards />,
                        loader: () => fetch('../fakeData.json')
                    },
                ],
            },
            {
                path: '/card/:id',
                element: <CardDetails />,
                loader: () => fetch('../fakeData.json')
            },
            {
                path: '/dashboard',
                element:<Dashboard />,
                loader: () => fetch('../fakeData.json'),
                children:[
                    {
                        path: '/dashboard',
                        element:<Cart />,
                    },
                    {
                        path:'/dashboard/cart',
                        element: <Cart />
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <Wishlist />
                    }
                ]
            },
            {
                path:'/statistics',
                element: <Statistics />
            }
        ]
    },
]);


export { routes }