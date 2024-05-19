import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {HomePage} from "../views/HomePage";
import {Publish} from "../views/Publish";


const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {   path: "",   element: <HomePage/> },
            {   path: "publish",   element: <Publish/> }
        ]
    }
])

export {router}