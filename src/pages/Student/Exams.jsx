import React, { useState } from "react";
import Body from "../../components/Body";

const Exams = () => {
  const [exams, setExams] = useState([
    { id: 1, subject: "Math", registered: false },
    { id: 2, subject: "Physics", registered: false },
  ]);

  const handleRegister = (id) => {
    setExams((prevExams) =>
      prevExams.map((exam) =>
        exam.id === id ? { ...exam, registered: true } : exam
      )
    );
  };

  return (
    <Body title="Exam Registration">
      <table className="data-table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.subject}</td>
              <td>
                {exam.registered ? "Registered" : "Not Registered"}
              </td>
              <td>
                {!exam.registered && (
                  <button onClick={() => handleRegister(exam.id)}>
                    Register
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Body>
  );
};

export default Exams;