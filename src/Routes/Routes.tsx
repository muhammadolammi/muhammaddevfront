import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {HomePage} from "../views/HomePage";
import { PublishPostPage} from "../views/PublishPostPage";
import { EditPostPage } from "../views/EditPostPage";
import { EditTutorialPage } from "../views/EditTutorialPage";
import { PublishTutorialPage } from "../views/PublishTutorialPage";
import ContentsPage from "../views/ContentsPage";
import { F404Page } from "../common/F404Page";
import {ContentPage} from "../views/ContentPage";


const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {   path: "",   element: <HomePage/> },
            {   path: "publishpost",   element: <PublishPostPage/> },
            {   path: "publishtutorial",   element: <PublishTutorialPage/> },

            { path: "editpost/:postID", element: <EditPostPage /> }, // Add the dynamic route
            { path: "edittutorial/:tutorialID", element: <EditTutorialPage /> } ,
            {path:"/:contentsType", element:<ContentsPage/>},
            {path:"/:contentType/:title", element:<ContentPage />},


        ],
        errorElement: <F404Page />
    }
])

export {router}