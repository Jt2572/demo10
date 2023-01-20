import { createBrowserRouter } from "react-router-dom"
import ErrorPage from "../components/error-page"


const router =createBrowserRouter([
        {
            path: '/',
            element:  <>/</>,
            errorElement: <ErrorPage/>
    
        },
        {
            path: '/chat',
            element:  <h2>let's chat</h2>,
            // errorElement: <ErrorPage/>
    
        },

    ]

) 


export default router