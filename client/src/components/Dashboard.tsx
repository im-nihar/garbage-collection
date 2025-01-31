import Calendar from "./GarbageCalendar";
import GarbageTable from "./GarbageTable";
import Inputform from "./InputForm";

import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <div className="garbage-tracker-container">
        <div className="garbage-header">
          <h1>Infamous Garbage Calender</h1>
        </div>
        <Calendar />
        <Inputform />
        <GarbageTable />
      </div>
    </>
  );
};

export default Dashboard;
