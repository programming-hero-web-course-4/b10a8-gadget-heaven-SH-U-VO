import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home"
import Cards from "../components/Cards";
import CardDetails from "../pages/CardDetails";
import Dashboard from "../pages/Dashboard";

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
                element:<Dashboard />
            }
        ]
    },
]);


export { routes }