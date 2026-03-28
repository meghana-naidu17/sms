import React, { useEffect, useState } from "react";
import Body from "../../components/Body";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSchedule([
      { id: 1, day: "Monday", subject: "Math", time: "10:00 - 11:00" },
      { id: 2, day: "Tuesday", subject: "Physics", time: "11:00 - 12:00" },
      { id: 3, day: "Wednesday", subject: "Chemistry", time: "09:00 - 10:00" },
    ]);
  }, []);

  return (
    <Body title="My Schedule">
      <table className="data-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item) => (
            <tr key={item.id}>
              <td>{item.day}</td>
              <td>{item.subject}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Body>
  );
};

export default Schedule;