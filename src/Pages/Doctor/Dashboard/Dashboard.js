import './dashboard.scss';
import DoctorWidget from './Widget/Widget';
import Features from './Features/Features';
import DoctorCharts from './Charts/DoctorCharts';

const Dashboard = () => {
    return (
        <div className='doctor-dashboard'>
            <div className='doctor-dashboard-container'>
                <div className='doctor-widgets'>
                    <DoctorWidget type="user"/>
                    <DoctorWidget type="appointment"/>
                    <DoctorWidget type="medicalrecord"/>
                    <DoctorWidget type="balance"/>
                </div>
                <div className='charts'>
                    <Features/>
                    <DoctorCharts title="Last 5 Months Revenue"/>
                </div>
            </div>
        </div>

        
    )
}

export default Dashboard;