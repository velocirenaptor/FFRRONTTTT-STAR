import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import ProfileSettings from "./ProfileSettings";
import Dashboard from "./Dashboard";

function DashboardLayout() {
  const location = useLocation();
  const [currentComponent, setCurrentComponent] = useState(null);

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard/profile":
        setCurrentComponent(<ProfileSettings />);
        break;
      default:
        setCurrentComponent(<Dashboard />);
        break;
    }
  }, [location]);

  return (
    <>
      <Sidebar />
      <div className="dashboard-content">
        {currentComponent}
      </div>
    </>
  );
}

export default DashboardLayout;
