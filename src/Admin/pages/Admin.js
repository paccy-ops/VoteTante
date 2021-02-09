import NavDashboard from '../Components/NavDashboard';
import ActivePostSelect from '../Components/ActivePostSelect';
import Repots from '../Components/Report';
import ReportParPost from '../Components/ReportParPost';
import DeepReports from '../Components/DeepReports';

import './Admin.css';
const Admin = () => {
  return (
    <div className='admin'>
      <NavDashboard />
      <ActivePostSelect />
      <Repots />
      <ReportParPost />
      <DeepReports />
    </div>
  );
};

export default Admin;
