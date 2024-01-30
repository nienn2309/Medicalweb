import Sidebar from './Sidenav'
import './patientstyle.css';

function Userlayout({children}) {
    return (
        <div className='LOcontainer'>
            <Sidebar/>
            <div className='main'> {children} </div>
        </div>
    );
}

export default Userlayout;