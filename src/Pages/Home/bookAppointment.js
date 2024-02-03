import React from 'react';
import './styleHome.css'
import { Link } from 'react-router-dom';

const bookAppointment = () =>  {
    return (
        <div className='homeover'>
            <section className="bookApp" id="bookApp">
                <h1 className="heading"><span>Book </span>Now</h1>
                <div className="bookApp-row">
                    <div className="image">
                        <img src="image/booking-app.svg" alt=""></img>
                    </div>
                    <form action="">
                        <h3>Book Appointment</h3>
                        <input type="text" placeholder="Your Name" className="bookApp-box"></input>
                        <input type="number" placeholder="Your Phone Number" className="bookApp-box"></input>
                        <input type="text" placeholder="Your Email" className="bookApp-box"></input>
                        <input type="date" className="bookApp-box"></input>
                        <input type="submit" value="Book Now" className="home-btn"></input>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default bookAppointment;