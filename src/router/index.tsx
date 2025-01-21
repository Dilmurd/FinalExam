import {useRoutes} from "react-router-dom"
import Home from "../pages/Home/Home"
import Layout from "../Layout/Layout"
import Detail from "../pages/Detail/Detail"
import CartPage from "../pages/Cart/Cart"
import NotFound from "../pages/NotFound/NotFound"


function Router() {
  return (
    <>
    {
        useRoutes([
            {
                path: "/",
                element: <Layout/>,
                children: [
                    {
                        path: "/",
                        element: <Home/>
                    },
                    {
                        path: "products/:id",
                        element: <Detail/>
                    },
                    {
                        path: "/cart",
                        element: <CartPage/>
                    },
                    {
                        path: "/*",
                        element: <NotFound/>
                    }
                ]
            }
        ])
    }
    </>
  )
}

export default Router