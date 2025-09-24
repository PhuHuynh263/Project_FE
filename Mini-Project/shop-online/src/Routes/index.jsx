import LayoutDefault from "../layout/LayoutDefault"
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";


export const routes = [
    {
        path: "/",
        element: <LayoutDefault />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
];
