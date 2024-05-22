import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {HomePage} from "../views/HomePage";
import { PublishPostPage} from "../views/PublishPostPage";
import { EditPostPage } from "../views/EditPostPage";
import { EditTutorialPage } from "../views/EditTutorialPage";
import { PublishTutorialPage } from "../views/PublishTutorialPage";


const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {   path: "",   element: <HomePage/> },
            {   path: "publishpost",   element: <PublishPostPage/> },
            {   path: "publishtutorial",   element: <PublishTutorialPage/> },

            { path: "editpost/:postID", element: <EditPostPage /> }, // Add the dynamic route
            { path: "edittutorial/:tutorialID", element: <EditTutorialPage /> } 

        ]
    }
])

export {router}