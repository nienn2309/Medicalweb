import React from 'react';
import './styleHome.css'
import { Link } from 'react-router-dom';

const doctorList = () =>  {
    return (
        <div className='homeover'>
            <section className="doctorList" id="doctorList">
                <h1 className="heading">Our <span>Doctors</span></h1>
                <div className="doctorList-container">
                    <div className="doctorList-box">
                        <img src="image/doctor-4.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" className="fab fa-facebook"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="doctorList-box">
                        <img src="image/doctor-4.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" className="fab fa-facebook"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="doctorList-box">
                        <img src="image/doctor-4.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" className="fab fa-facebook"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="doctorList-box">
                        <img src="image/doctor-4.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" className="fab fa-facebook"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>  
                    <div className="doctorList-box">
                        <img src="image/doctor-5.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" className="fab fa-facebook"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="doctorList-box">
                        <img src="image/doctor-6.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" className="fab fa-facebook"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default doctorList;