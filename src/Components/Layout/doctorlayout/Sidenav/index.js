import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


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
            path:"/doctor/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/doctor/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },
        {
            path:"/doctor/comment",
            name:"Comment",
            icon:<FaCommentAlt/>
        },
        {
            path:"/doctor/product",
            name:"Product",
            icon:<FaShoppingBag/>
        },
        {
            path:"/doctor/productlist",
            name:"Product List",
            icon:<FaThList/>
        },
    ]
    return (
        <div className="SNcontainer">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h3 style={{display: isOpen ? "block" : "none"}} className="logo">AuspexCare</h3>
                   <div style={{marginLeft: isOpen ? "10px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
        </div>
    );
};

export default Sidebar;