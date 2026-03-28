import React, { useState } from "react";
import Body from "../../components/Body";

const FacultyProfile = () => {
  const [profile, setProfile] = useState({
    name: "Dr. Smith",
    email: "drsmith@college.com",
    department: "Mathematics",
    phone: "9876543210",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <Body title="My Profile">
      <form className="profile-form">
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

export default FacultyProfile;