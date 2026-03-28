import React, { useState } from "react";
import Body from "../../components/Body";

const Schedule = () => {
  const [schedule, setSchedule] = useState([
    { day: "Monday", subject: "Mathematics", time: "10:00 - 11:00" },
    { day: "Tuesday", subject: "Physics", time: "11:00 - 12:00" },
  ]);

  const [newEntry, setNewEntry] = useState({
    day: "",
    subject: "",
    time: "",
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setSchedule([...schedule, newEntry]);
    setNewEntry({ day: "", subject: "", time: "" });
  };

  return (
    <Body title="My Schedule">
      <form onSubmit={handleAdd}>
        <input
          placeholder="Day"
          value={newEntry.day}
          onChange={(e) =>
            setNewEntry({ ...newEntry, day: e.target.value })
          }
        />
        <input
          placeholder="Subject"
          value={newEntry.subject}
          onChange={(e) =>
            setNewEntry({ ...newEntry, subject: e.target.value })
          }
        />
        <input
          placeholder="Time"
          value={newEntry.time}
          onChange={(e) =>
            setNewEntry({ ...newEntry, time: e.target.value })
          }
        />
        <button type="submit">Add</button>
      </form>

      <table className="data-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Subject</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
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