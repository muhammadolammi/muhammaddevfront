import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {HomePage} from "../views/HomePage";
import { PublishPostPage} from "../views/PublishPostPage";
import { EditPostPage } from "../views/EditPostPage";
import { EditTutorialPage } from "../views/EditTutorialPage";
import { PublishTutorialPage } from "../views/PublishTutorialPage";
import { F404Page } from "../common/F404Page";
import { PlaylistsPage } from "../views/PlaylistsPage";
import TutorialsPage from "../views/TutorialsPage";
import PostsPage from "../views/PostsPage";
import {  SignInnPage } from "../views/SignInPage";
import { SignUpPage } from "../views/SignUpPage";
import { DashboardPage } from "../views/DashboardPage";


const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
        children: [
            {   path: "",   element: <HomePage/> },
            {   path: "/publishpost",   element: <PublishPostPage/> },
            {   path: "/publishtutorial",   element: <PublishTutorialPage/> },

            { path: "/editpost/:postTitle", element: <EditPostPage /> }, // Add the dynamic route
            { path: "/edittutorial/:tutorialTitle", element: <EditTutorialPage /> } ,
            {path:"/tutorials", element:<TutorialsPage/>},

            // {path:"/tutorials/:title", element:<TutorialPage />},

            {path:"/posts", element:<PostsPage/>},
            // {path:"/posts/:title", element:<PostPage />},

            {path:"/playlists", element:<PlaylistsPage />},
             

            // AUTHS path
            {path:"/signIn", element:<SignInnPage />},
            {path:"/signup", element:<SignUpPage />},

            {path:"/dashboard/*", element:<DashboardPage />}


        ],
        errorElement: <F404Page />
    }
])

export {router}