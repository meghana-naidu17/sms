import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar />

      {/* NAVBAR */}
  
<Header />
      {/* HERO */}
      <section className="student-hero">
        <div className="hero-overlay">
          <div className="hero-content-left">
            <h1>Complete Student Management Solution</h1>
            <p>
              Manage academics, attendance, exams, results, and communication
              efficiently in one platform.
            </p>
            <button onClick={() => navigate("/login")}>
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;