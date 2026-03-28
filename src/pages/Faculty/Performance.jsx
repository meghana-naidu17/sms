import React, { useState } from "react";
import Body from "../../components/Body";

const Performance = () => {
  const [records, setRecords] = useState([
    { id: 1, name: "John Doe", marks: 75 },
    { id: 2, name: "Jane Smith", marks: 88 },
  ]);

  const updateMarks = (id, newMarks) => {
    setRecords(
      records.map((rec) =>
        rec.id === id ? { ...rec, marks: newMarks } : rec
      )
    );
  };

  return (
    <Body title="Student Performance">
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Marks</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {records.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>
                <input
                  type="number"
                  value={student.marks}
                  onChange={(e) =>
                    updateMarks(student.id, e.target.value)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Body>
  );
};

export default Performance;