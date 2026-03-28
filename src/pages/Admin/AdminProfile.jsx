import React, { useState } from "react";
import Body from "../../components/Body";

const AdminProfile = () => {
  const [profile, setProfile] = useState({
    name: "Admin User",
    email: "admin@college.com",
    phone: "9876543210",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <Body title="My Profile">
      <form className="profile-form">
        <label>Name</label>
        <input name="name" value={profile.name} onChange={handleChange} />

        <label>Email</label>
        <input name="email" value={profile.email} onChange={handleChange} />

        <label>Phone</label>
        <input name="phone" value={profile.phone} onChange={handleChange} />

        <button type="submit">Update Profile</button>
      </form>
    </Body>
  );
};

export default AdminProfile;