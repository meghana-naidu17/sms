import React, { useEffect, useState } from "react";
import Body from "../../components/Body";

const MappedStudents = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Simulated API fetch
    setStudents([
      { id: 1, name: "John Doe", roll: "CSE101", attendance: 85 },
      { id: 2, name: "Jane Smith", roll: "CSE102", attendance: 90 },
      { id: 3, name: "Mark Lee", roll: "CSE103", attendance: 78 },
    ]);
  }, []);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Body title="Mapped Students">
      <input
        type="text"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>Attendance %</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.roll}</td>
              <td>{student.attendance}%</td>
              <td>
                <button onClick={() => setSelected(student)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div className="modal">
          <h3>Student Details</h3>
          <p>Name: {selected.name}</p>
          <p>Roll No: {selected.roll}</p>
          <p>Attendance: {selected.attendance}%</p>
          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </Body>
  );
};

export default MappedStudents;