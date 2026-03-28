import React, { useState } from "react";
import Body from "../../components/Body";

const Register = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Data Structures", registered: false },
    { id: 2, name: "Operating Systems", registered: false },
  ]);

  const registerCourse = (id) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id
          ? { ...course, registered: true }
          : course
      )
    );
  };

  return (
    <Body title="Course Registration">
      <table className="data-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>
                {course.registered
                  ? "Registered"
                  : "Not Registered"}
              </td>
              <td>
                {!course.registered && (
                  <button
                    onClick={() => registerCourse(course.id)}
                  >
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

export default Register;