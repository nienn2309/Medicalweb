import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import style from '../doctorstyle.module.css';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/doctor/home",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/doctor/information",
            name:"Information",
            icon:<FaTh/>
        },
        {
            path:"/doctor/medicalrecord",
            name:"Medical Record",
            icon:<FaTh/>
        },
        {
            path:"/doctor/appointment",
            name:"Appointment",
            icon:<FaTh/>
        },
        {
            path:"/doctor/contact",
            name:"Contact",
            icon:<FaTh/>
        },
    ]
    return (
        <div className={style.SNcontainer}>
           <div style={{width: isOpen ? "250px" : "50px"}} className={style.sidebar}>
               <div className={style.top_section}>
                   <h3 style={{display: isOpen ? "block" : "none"}} className={style.logo}>AuspexCare</h3>
                   <div style={{marginLeft: isOpen ? "10px" : "0px"}} className={style.bars}>
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className={style.link} activeclassName={style.active}>
                           <div className={style.icon}>{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className={style.link_text}>{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        </div>
    );
};

export default Sidebar;