import React, { useEffect, useState } from "react";
import Body from "../../components/Body";

const MappedFaculty = () => {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFaculty([
      { id: 1, name: "Dr. Brown", subject: "Mathematics" },
      { id: 2, name: "Prof. Green", subject: "Physics" },
    ]);
  }, []);

  return (
    <Body title="My Faculty">
      <table className="data-table">
        <thead>
          <tr>
            <th>Faculty Name</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((fac) => (
            <tr key={fac.id}>
              <td>{fac.name}</td>
              <td>{fac.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Body>
  );
};

export default MappedFaculty;