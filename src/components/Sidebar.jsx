import React, { useState } from "react";
import navLinks from "../data/navLinks";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleClick = (name) => {
    setActiveTab(name);
    console.log("Selected:", name); // or trigger display of a section
  };

  return (
    <div className="sidebar">

      {navLinks.map((section, index) => (
        <div key={index} className="section">
          <p className="section-title">{section.title}</p>
          <ul>
            {section.links.map((link, idx) => (
              <li
                key={idx}
                className={activeTab === link.name ? "sidebar-link active" : "sidebar-link"}
                onClick={() => handleClick(link.name)}
              >
                <span className="icon">{link.icon}</span>
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div
        className='setting'
      >
        <span className="icon">⚙️</span>Setting
      </div>
    </div>
  );
};

export default Sidebar;