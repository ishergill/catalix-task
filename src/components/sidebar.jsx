import { useState } from "react";

// !assets
import {
  logo,
  home,
  timer,
  chart,
  transform,
  library,
  left,
  logout,
  settings,
} from "../assets";

// !components
import SidebarTab from "./sidebarTab";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(2);

  const navText = ["Home", "Activities", "Analytics", "Transform", "Library"];
  const navLogo = [home, timer, chart, transform, library];

  const controlText = ["Settings", "Logout"];
  const controlLogo = [settings, logout];

  return (
    <div className="sidebarFrame">
      <div className="sidebar">
        {/* Sidebar icon */}

        <div className="sidebarIcon">
          <div className="leftCircle">
            <div className="left">
              <img src={left} alt="" className="leftVector" />
            </div>
          </div>
        </div>

        {/* Logo */}

        <div className="logo">
          <div className="logoIcon">
            <div className="icon">
              <div className="box">
                <img src={logo} alt="" className="logoVector" />
              </div>
            </div>
          </div>

          <h1 className="logoText">Catalix</h1>
        </div>

        {/* Navigation panel */}

        <div className="navPanel">
          {/* Nav Panel Tab */}

          {navText.map((text, i) => {
            return (
              <SidebarTab
                key={i}
                setActiveTab={setActiveTab}
                image={navLogo[i]}
                text={navText[i]}
                isActive={activeTab == i ? true : false}
              />
            );
          })}
        </div>

        {/* Controls panel */}

        <div className="controlsPanel">
          {controlText.map((text, i) => {
            return <SidebarTab key={i} image={controlLogo[i]} text={text} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
