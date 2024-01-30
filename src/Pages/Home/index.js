import './style.css'

function Home() {
    return (
        <div>
            <section class="home" id="home">
                <div class="image">
                <img src="./image/doctors-bro.svg" alt=""/>
                </div>
                <div class="content">
                    <h3>stay safe</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, facere, impedit vitae quas iusto obcaecati amet recusandae perferendis neque possimus illum eveniet nihil quod et nesciunt cum qui, fugit deserunt!</p>
                    <a href="#" class="btn">Contact Us<span class="fas fa-chevron-right"></span></a>
                </div>
            </section>

            <section class="icons-container">
                <div class="icons">
                    <i class="fas fa-user-md"></i>
                    <h3>300+</h3>
                    <p>Doctors at work</p>
                </div>

                <div class="icons">
                    <i class="fas fa-user"></i>
                    <h3>10000+</h3>
                    <p>Positive feedback</p>
                </div>

                <div class="icons">
                    <i class="fas fa-procedures"></i>
                    <h3>1000+</h3>
                    <p>Room Facility</p>
                </div>

                <div class="icons">
                    <i class="fas fa-hospital"></i>
                    <h3>100+</h3>
                    <p>Avalaible Hospitals</p>
                </div>
            </section>

            <section class="servies" id="services">
                <h1 class="heading">Our <span>Services</span></h1>
                <div class="box">
                    <i class="fas fa-notes-medical"></i>
                    <h3>Free Checkups</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                    <a href="#" class="btn">Learn more <span class="fas fa-chavron-right"></span></a>
                </div>

                <div class="box">
                    <i class="fas fa-ambulance"></i>
                    <h3>24/7 Ambulances</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                    <a href="#" class="btn">Learn more <span class="fas fa-chavron-right"></span></a>
                </div>

                <div class="box">
                    <i class="fas fa-user-md"></i>
                    <h3>Doctors</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dicta earum animi aperiam laboriosam consectetur ipsum nisi ratione. Consequuntur quam voluptatibus recusandae ad consectetur earum reprehenderit velit sequi autem fugiat!</p>
                    <a href="#" class="btn">Learn more <span class="fas fa-chavron-right"></span></a>
                </div>
            </section>
        </div>
    );
}

export default Home;