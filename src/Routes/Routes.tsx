import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {HomePage} from "../views/HomePage";
import {Publish} from "../views/Publish";
import { EditPost } from "../views/EditPostPage";


const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {   path: "",   element: <HomePage/> },
            {   path: "publish",   element: <Publish/> },
            { path: "editpost/:postId", element: <EditPost /> } // Add the dynamic route

        ]
    }
])

export {router}