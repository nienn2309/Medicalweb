import './styleHome.css'

function Services() {
    return (
        <div className='homeover'>
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
        </div>
    );
}

export default Services;