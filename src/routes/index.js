import homelayout from "../Components/Layout/homelayout";
import DoctorLayout from "../Components/Layout/doctorlayout";
import Userlayout from "../Components/Layout/userlayout";

import Home from "../Pages/Home/home"
//Doctor Pages
import Dashboard from "../Pages/Doctor/Dashboard/Dashboard";
import MedicalRecord from "../Pages/Doctor/MedicalRecord/MedicalRecord";
import DoctorDetails from "../Pages/Doctor/Information/information";
import Appointment from "../Pages/Doctor/Appointment/appointment";
import Contact from "../Pages/Doctor/Contact/contact";
//Patient Pages
import MedicalSummary from "../Pages/Patient/MedicalSummary/MedicalSummary";
import AppointmentP from "../Pages/Patient/AppointmentP/AppointmentP";
import Bill from "../Pages/Patient/Myfinancials/bill";
import TreatmentPlan from "../Pages/Patient/TreatmentPlan/treatmentplan";
import Wallet from "../Pages/Patient/Wallet/wallet";

import Login from "../Pages/LoginSignup/login"
import Signup from "../Pages/LoginSignup/signup";

const publicRoutes = [
    { path: '/', component: Home, layout: homelayout},

    { path: '/doctor/home', component: Dashboard, layout: DoctorLayout},
    { path: '/doctor/medicalrecord', component: MedicalRecord, layout: DoctorLayout},
    { path: '/doctor/information', component: DoctorDetails, layout: DoctorLayout},
    { path: '/doctor/appointment', component: Appointment, layout: DoctorLayout},
    { path: '/doctor/contact', component: Contact, layout: DoctorLayout},
    
    { path: '/patient/home', component: MedicalSummary, layout: Userlayout},
    { path: '/patient/appointment', component: AppointmentP, layout: Userlayout},
    { path: '/patient/finance', component: Bill, layout: Userlayout},
    { path: '/patient/treatment', component: TreatmentPlan, layout: Userlayout},
    { path: '/patient/wallet', component: Wallet, layout: Userlayout},

    { path: '/login', component:Login, layout: null},
    { path: '/signup', component:Signup, layout: null}
];

const privateRoutes = [

]

export { publicRoutes, privateRoutes}