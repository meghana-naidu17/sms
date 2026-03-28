import React, { useEffect, useState } from "react";
import Body from "../../components/Body";

const AdminDashboard = () => {
  const [stats, setStats] = useState({});
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStats({
      students: 520,
      faculty: 48,
      departments: 12,
      courses: 35,
    });

    setActivities([
      "New student registered",
      "Faculty schedule updated",
      "Department added",
      "Results published",
    ]);
  }, []);

  return (
    <Body title="Admin Dashboard">
      <div className="dashboard-cards">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="card">
            <h3>{key.toUpperCase()}</h3>
            <p>{value}</p>
          </div>
        ))}
      </div>

      <div className="recent-activities">
        <h3>Recent Activities</h3>
        <ul>
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </Body>
  );
};

export default AdminDashboard;