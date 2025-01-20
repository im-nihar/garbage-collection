import React, { useState } from "react";
import moment from "moment";
import "../styles/inputform.css";
import Calendar from "./GarbageCalendar";
import GarbageTable from "./GarbageTable";

type GarbageType = "Green" | "Recyclable" | "Both";

const Dashboard = () => {
  const [garbageType, setGarbageType] = useState<GarbageType | "">("");
  const [collectionDateTime, setCollectionDateTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const selectedDate = e.target.value.split('T')[0]; // Get the date part only
    // if (selectedDate) {
    //   const currentTime = moment().format('HH:mm'); // Get the current time
    //   setCollectionDateTime(`${selectedDate}T${currentTime}`);
    // } else {
    //   setCollectionDateTime('');
    // }

    setCollectionDateTime(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!garbageType || !collectionDateTime) {
      alert("Please fill in all fields");
      return;
    }
    const garbageData = {
      garbageType,
      dateTime: collectionDateTime,
    };

    console.log("Garbage Type:", garbageData, garbageType);
    console.log("Collection Date and Time:", collectionDateTime);
    alert("Data submitted successfully!");
    // Reset the form
    setGarbageType("");
    setCollectionDateTime("");
  };

  return (
    <>
      <h1>Infamous Garbage Calender</h1>
      <div className="garbage-tracker-container">
        <Calendar />
        <form onSubmit={handleSubmit} className="garbage-tracker-form">
          <label htmlFor="garbageType">Select Garbage Type:</label>
          <select
            id="garbageType"
            value={garbageType}
            onChange={(e) => setGarbageType(e.target.value as GarbageType)}
          >
            <option value="">-- Select --</option>
            <option value="Green">Green</option>
            <option value="Recyclable">Recyclable</option>
            <option value="Both">Both</option>
          </select>

          <label htmlFor="collectionDateTime">
            Date and Time of Collection:
          </label>
          <input
            type="datetime-local"
            id="collectionDateTime"
            value={collectionDateTime}
            onChange={handleDateChange}
          />

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <GarbageTable />
      </div>
    </>
  );
};

export default Dashboard;

const DUMMY_VALUES = [
  {
    dateTime: "2025-01-20T17:25",
    garbageType: "Both",
  },
  {
    dateTime: "2025-01-18T17:25",
    garbageType: "Green",
  },

  {
    dateTime: "2025-01-15T17:25",
    garbageType: "Both",
  },
  {
    dateTime: "2025-01-05T17:25",
    garbageType: "Recyclable",
  },

  {
    dateTime: "2025-01-1T17:25",
    garbageType: "Both",
  },
];
