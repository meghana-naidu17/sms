import React, { useEffect, useState } from "react";
import Body from "../../components/Body";

const ManageStudents = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStudents([
      { id: 1, name: "John Doe", email: "john@mail.com", department: "CSE" },
      { id: 2, name: "Jane Smith", email: "jane@mail.com", department: "ECE" },
    ]);
  }, []);

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setStudents([...students, { id: Date.now(), ...newStudent }]);
    setShowModal(false);
    setNewStudent({ name: "", email: "", department: "" });
  };

  return (
    <Body
      title="Manage Students"
      actions={<button onClick={() => setShowModal(true)}>Add Student</button>}
    >
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
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.department}</td>
              <td>
                <button onClick={() => handleDelete(student.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal">
          <h3>Add New Student</h3>
          <form onSubmit={handleAdd}>
            <input
              placeholder="Name"
              value={newStudent.name}
              onChange={(e) =>
                setNewStudent({ ...newStudent, name: e.target.value })
              }
            />
            <input
              placeholder="Email"
              value={newStudent.email}
              onChange={(e) =>
                setNewStudent({ ...newStudent, email: e.target.value })
              }
            />
            <input
              placeholder="Department"
              value={newStudent.department}
              onChange={(e) =>
                setNewStudent({ ...newStudent, department: e.target.value })
              }
            />
            <button type="submit">Save</button>
          </form>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>
      )}
    </Body>
  );
};

export default ManageStudents;