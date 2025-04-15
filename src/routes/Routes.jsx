import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home"
import Cards from "../components/Cards";

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
        ]
    },
]);


export { routes }