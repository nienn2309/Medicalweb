import homelayout from "../Components/Layout/homelayout";
import DoctorLayout from "../Components/Layout/doctorlayout";

import Home from "../Pages/Home"

import DoctorDetails from "../Pages/Doctor";
import About from "../Pages/Doctor/about";
import Bill from "../Pages/Doctor/Bill/bill";
import Treatment from "../Pages/Doctor/Bill/treatment";
import Appointment from "../Pages/Doctor/product";

import HomePatient from "../Pages/Patient";

import Login from "../Pages/LoginSignup"

const publicRoutes = [
    { path: '/', component: Home, layout: homelayout},
    { path: '/doctor/home', component: DoctorDetails, layout: DoctorLayout},
    { path: '/doctor/about', component: About, layout: DoctorLayout},
    { path: '/doctor/bills', component: Bill, layout: DoctorLayout},
    { path: '/doctor/treatment', component: Treatment, layout: DoctorLayout},
    { path: '/doctor/appointment', component: Appointment, layout: DoctorLayout},
    
    { path: '/patient/home', component: HomePatient},
    { path: '/login', component:Login, layout: null},
];

const privateRoutes = [

]

export { publicRoutes, privateRoutes}