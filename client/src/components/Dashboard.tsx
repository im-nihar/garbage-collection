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
          {/* <p>
            {document.documentElement.clientWidth}
            
          </p> */}
        </div>
        <Calendar DUMMY_VALUES={DUMMY_VALUES}/>
        <Inputform />
        <GarbageTable />
      </div>
    </>
  );
};

export default Dashboard;

const DUMMY_VALUES = [
  {
    dateTime: "2025-01-09T17:25",
    garbageType: "Both",
  },
  {
    dateTime: "2025-01-12T17:25",
    garbageType: "Green",
  },
  {
    dateTime: "2025-01-19T17:25",
    garbageType: "Both",
  },
  {
    dateTime: "2025-01-27T17:25",
    garbageType: "Green",
  },
  {
    dateTime: "2025-02-04T17:25",
    garbageType: "Both",
  },
  {
    dateTime: "2025-02-10T17:25",
    garbageType: "Green",
  },
  {
    dateTime: "2025-02-17T17:25",
    garbageType: "Green",
  },
  {
    dateTime: "2025-02-21T17:25",
    garbageType: "Recyclable",
  },
  {
    dateTime: "2025-02-25T17:25",
    garbageType: "Green",
  },
  {
    dateTime: "2025-03-05T17:25",
    garbageType: "Both",
  },
];
