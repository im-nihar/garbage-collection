import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/GarbageCalender.css"; // Import the CSS file

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
];

const GarbageCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    setSelectedDate(null);
  }, []);

  const getShortType = (type: string) => {
    switch (type) {
      case "Green":
        return "G";
      case "Recyclable":
        return "R";
      case "Both":
        return "B";
      default:
        return "";
    }
  };

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const events = DUMMY_VALUES.filter(
        (item) => item.dateTime.split("T")[0] === formattedDate
      );
      return (
        <div className="tile-content">
          {events.map((event, index) => (
            <div
              key={index}
              className={`garbage-name garbage-type-${event.garbageType.toLowerCase()} `}
            >
              {getShortType(event.garbageType)}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === "month") {
      const formattedDate = date.toISOString().split("T")[0];
      const event = DUMMY_VALUES.find(
        (item) => item.dateTime.split("T")[0] === formattedDate
      );
      if (event) {
        return `garbage-type-${event.garbageType.toLowerCase()}`;
      }
    }
    return null;
  };

  const renderNote = () => {
    const types = ["Green", "Recyclable", "Both"];
    return (
      <>
        {types.map((type, index) => (
          <div key={index} className="note-header">
            <div className={`color-ball ${type.toLowerCase()}`}></div>
            <label className="label-1"> {type} waste day</label>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="garbage-calendar-container">
      <Calendar
        // onChange={setSelectedDate}
        value={selectedDate}
        tileContent={tileContent}
        tileClassName={tileClassName}
      />

      <label className="note">
        Note:
        {renderNote()}
      </label>
    </div>
  );
};

export default GarbageCalendar;
