import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute";

/* Public Pages */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

/* Admin */
import Admin from "./pages/Admin/Admin";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageStudents from "./pages/Admin/ManageStudents";
import ManageFaculty from "./pages/Admin/ManageFaculty";
import AdminProfile from "./pages/Admin/AdminProfile";
import Logout from "./pages/Admin/Logout";

/* Faculty */
import Faculty from "./pages/Faculty/Faculty";
import MappedStudents from "./pages/Faculty/MappedStudents";
import ScheduleFaculty from "./pages/Faculty/Schedule";
import Performance from "./pages/Faculty/Performance";
import Facultyprofile from "./pages/Faculty/Facultyprofile";

/* Student */
import Student from "./pages/Student/Student";
import ScheduleStudent from "./pages/Student/Schedule";
import Results from "./pages/Student/Results";
import Exams from "./pages/Student/Exams";
import Register from "./pages/Student/Register";
import MappedFaculty from "./pages/Student/MappedFaculty";
import Studentprofile from "./pages/Student/Studentprofile";

function App() {
  return (
    <Routes>
      {/* ================= Public Routes ================= */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* ================= Admin Routes ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRole="admin">
            <Admin />
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="manage-students" element={<ManageStudents />} />
        <Route path="manage-faculty" element={<ManageFaculty />} />
        <Route path="profile" element={<AdminProfile />} />
        <Route path="logout" element={<Logout />} />
      </Route>

      {/* ================= Faculty Routes ================= */}
      <Route
        path="/faculty"
        element={
          <ProtectedRoute allowedRole="faculty">
            <Faculty />
          </ProtectedRoute>
        }
      >
        <Route index element={<MappedStudents />} />
        <Route path="schedule" element={<ScheduleFaculty />} />
        <Route path="performance" element={<Performance />} />
        <Route path="profile" element={<Facultyprofile />} />
      </Route>

      {/* ================= Student Routes ================= */}
      <Route
        path="/student"
        element={
          <ProtectedRoute allowedRole="student">
            <Student />
          </ProtectedRoute>
        }
      >
        {/* Default page */}
        <Route index element={<ScheduleStudent />} />

        {/* FIXED: Added schedule route */}
        <Route path="schedule" element={<ScheduleStudent />} />

        <Route path="results" element={<Results />} />
        <Route path="exams" element={<Exams />} />
        <Route path="register" element={<Register />} />
        <Route path="faculty" element={<MappedFaculty />} />
        <Route path="profile" element={<Studentprofile />} />
      </Route>

      {/* ================= Fallback ================= */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;