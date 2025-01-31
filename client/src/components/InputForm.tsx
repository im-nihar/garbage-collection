import React, { useState } from "react";
import moment from "moment";
import "../styles/inputform.css";

type GarbageType = "Green" | "Recyclable" | "Both";

const Inputform = () => {
  const [garbageType, setGarbageType] = useState<GarbageType | "">("");
  const [collectionDateTime, setCollectionDateTime] = useState(
    moment().format("YYYY-MM-DDTHH:mm")
  );

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div>
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

        <label htmlFor="collectionDateTime">Date and Time of Collection:</label>
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
    </div>
  );
};

export default Inputform;
