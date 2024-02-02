import './style.css'

function Home() {
    return (
        <div className='homeover'>
            <section className="home hsection" id="home">
                <div className="image">
                <img src="./image/doctors-bro.svg" alt=""/>
                </div>
                <div className="content">
                    <h3>stay safe</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, facere, impedit vitae quas iusto obcaecati amet recusandae perferendis neque possimus illum eveniet nihil quod et nesciunt cum qui, fugit deserunt!</p>
                    <a href="#" className="home-btn">Contact Us<span className="fas fa-chevron-right"></span></a>
                </div>
            </section>

            <section className="icons-container hsection">
                <div className="icons">
                    <i className="fas fa-user-md"></i>
                    <h3>300+</h3>
                    <p>Doctors at work</p>
                </div>

                <div className="icons">
                    <i className="fas fa-user"></i>
                    <h3>10000+</h3>
                    <p>Positive feedback</p>
                </div>

                <div className="icons">
                    <i className="fas fa-procedures"></i>
                    <h3>1000+</h3>
                    <p>Room Facility</p>
                </div>

                <div className="icons">
                    <i className="fas fa-hospital"></i>
                    <h3>100+</h3>
                    <p>Avalaible Hospitals</p>
                </div>
            </section>

            <section className="services" id="services">
                <h1 className="heading">Our <span>Services</span></h1>
                <div className="services-container">
                    <div className="box">
                        <i className="fas fa-notes-medical"></i>
                        <h3>Free Checkups</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                        <a href="#" className="home-btn">Learn more <span className="fas fa-chavron-right"></span></a>
                    </div>

                    <div className="box">
                        <i className="fas fa-ambulance"></i>
                        <h3>24/7 Ambulances</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                        <a href="#" className="home-btn">Learn more <span className="fas fa-chavron-right"></span></a>
                    </div>

                    <div className="box">
                        <i className="fas fa-user-md"></i>
                        <h3>Doctors</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                        <a href="#" className="home-btn">Learn more <span className="fas fa-chavron-right"></span></a>
                    </div>

                    <div className="box">
                        <i class="fas fa-heartbeat"></i>
                        <h3>Bed Facility</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                        <a href="#" className="home-btn">Learn more <span className="fas fa-chavron-right"></span></a>
                    </div>

                    <div className="box">
                        <i className="fas fa-pills"></i>
                        <h3>Medicines</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                        <a href="#" className="home-btn">Learn more <span className="fas fa-chavron-right"></span></a>
                    </div>

                    <div className="box">
                        <i className="fas fa-procedures"></i>
                        <h3>Total Cares</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                        <a href="#" className="home-btn">Learn more <span className="fas fa-chavron-right"></span></a>
                    </div>
                </div>
            </section>  

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
                            <a href="#" class="fab fa-facebook"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="doctorList-box">
                        <img src="image/doctor-4.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" class="fab fa-facebook"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="doctorList-box">
                        <img src="image/doctor-4.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" class="fab fa-facebook"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>  
                    <div className="doctorList-box">
                        <img src="image/doctor-5.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" class="fab fa-facebook"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                    <div className="doctorList-box">
                        <img src="image/doctor-6.jpg" alt=""></img>
                        <h3>Tran Hoang Duy Linh</h3>
                        <span>Expert Doctor</span>
                        <div className="doctor-bio">
                            <a href="#" class="fab fa-facebook"></a>
                            <a href="#" class="fab fa-twitter"></a>
                            <a href="#" class="fab fa-instagram"></a>
                            <a href="#" class="fab fa-linkedin"></a>
                        </div>
                    </div>
                </div>
            </section>

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

export default Home;