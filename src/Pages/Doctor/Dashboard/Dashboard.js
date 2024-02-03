import './dashboard.scss';
import DoctorWidget from './Widget/Widget';
import Features from './Features/Features';
import DoctorCharts from './Charts/DoctorCharts';
import TransactionTable from './Table/Table';

const Dashboard = () => {
    return (
        <div className="doctordash">
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

            <div className="dashtable">
                <TransactionTable/>
            </div>

        </div>
        


        
    )
}

export default Dashboard;