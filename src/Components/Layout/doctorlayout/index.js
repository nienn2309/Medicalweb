import Sidebar from './Sidenav'
import './doctorstyle.css';

function DoctorLayout({children}) {
    return (
        <div className='LOcontainer'>
            <Sidebar/>
            <div className='main'> {children} </div>
        </div>
    );
}

export default DoctorLayout;