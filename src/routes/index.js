import homelayout from "../Components/Layout/homelayout";
import DoctorLayout from "../Components/Layout/doctorlayout";

import Home from "../Pages/Home"

import HomeDoctor from "../Pages/Doctor";
import About from "../Pages/Doctor/about";
import Analytics from "../Pages/Doctor/analytics";
import Comment from "../Pages/Doctor/comment";
import Product from "../Pages/Doctor/product";
import Productlist from "../Pages/Doctor/productlist";

import HomePatient from "../Pages/Patient";

import Login from "../Pages/LoginSignup"

const publicRoutes = [
    { path: '/', component: Home, layout: homelayout},
    { path: '/doctor/home', component: HomeDoctor, layout: DoctorLayout},
    { path: '/doctor/about', component: About, layout: DoctorLayout},
    { path: '/doctor/analytics', component: Analytics, layout: DoctorLayout},
    { path: '/doctor/comment', component: Comment, layout: DoctorLayout},
    { path: '/doctor/product', component: Product, layout: DoctorLayout},
    { path: '/doctor/productlist', component: Productlist, layout: DoctorLayout},
    
    { path: '/patient/home', component: HomePatient},
    { path: '/login', component:Login, layout: null},
];

const privateRoutes = [

]

export { publicRoutes, privateRoutes}