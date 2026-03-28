import React, { useEffect, useState } from "react";
import Body from "../../components/Body";

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setResults([
      { id: 1, subject: "Math", marks: 85 },
      { id: 2, subject: "Physics", marks: 78 },
      { id: 3, subject: "Chemistry", marks: 90 },
    ]);
  }, []);

  const calculateGPA = () => {
    if (results.length === 0) return "0.00";

    const total = results.reduce((acc, curr) => acc + curr.marks, 0);
    const avg = total / results.length;
    return (avg / 10).toFixed(2);
  };

  return (
    <Body title="My Results">
      <table className="data-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res) => (
            <tr key={res.id}>
              <td>{res.subject}</td>
              <td>{res.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="gpa-text">GPA: {calculateGPA()}</h3>
    </Body>
  );
};

export default Results;