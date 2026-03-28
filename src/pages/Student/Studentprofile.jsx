import React, { useState } from "react";
import Body from "../../components/Body";

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: "Rahul Kumar",
    email: "rahul@college.com",
    department: "CSE",
    year: "1st Year",
    phone: "8500022285",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  return (
    <Body title="My Profile">
      <form className="profile-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={profile.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          value={profile.email}
          onChange={handleChange}
        />

        <label>Department</label>
        <input
          name="department"
          value={profile.department}
          onChange={handleChange}
        />

        <label>Year</label>
        <input
          name="year"
          value={profile.year}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          name="phone"
          value={profile.phone}
          onChange={handleChange}
        />

        <button type="submit">Update Profile</button>
      </form>
    </Body>
  );
};

export default StudentProfile;