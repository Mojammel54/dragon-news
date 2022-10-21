import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";
import Profile from "../../pages/Others/Profile/Profile";
import TermsAndCondition from "../../pages/Others/TermsAndCondition/TermsAndCondition";
import PrivateRoute from "../Privateroute/PrivateRoute";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/news')

            },

            {

                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {

                path: '/news/:id',
                element: <PrivateRoute><News></News>,</PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },

            {

                path: '/login',
                element: <Login></Login>
            },
            {

                path: '/register',
                element: <Register></Register>
            },
            {

                path: '/registration',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {

                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },





        ]

    }






])