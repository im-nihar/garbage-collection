import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../styles/GarbageCalender.css"; // Import the CSS file

// type GarbageType = "Green" | "Recyclable" | "Both";

// interface GarbageEvent {
//   dateTime: string;
//   garbageType: GarbageType;
// }

// interface GarbageCalendarProps {
//   DUMMY_VALUES: GarbageEvent[];
// }

const GarbageCalendar = (props: any) => {
  const { DUMMY_VALUES } = props;
  // console.log("DUMMY_VALUES",DUMMY_VALUES,props.DUMMY_VALUES);
  
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
        (item: any) => item.dateTime.split("T")[0] === formattedDate
      );
      return (
        <div className="tile-content">
          {events.map((event: { garbageType: string }, index: number) => (
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
        (item: any) => item.dateTime.split("T")[0] === formattedDate
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
