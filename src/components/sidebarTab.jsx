import PropTypes from "prop-types";

const SidebarTab = ({ image, text, isActive = false }) => {
  return (
    <div className={"navPanelTab " + (isActive ? "navPanelTabActive" : "")}>
      <div className="navLogo">
        <div className="navLogo">
          <div className="home">
            <img src={image} alt="" className="homeIcon" />
          </div>
        </div>
      </div>

      <h1 className="navText">{text}</h1>
    </div>
  );
};

SidebarTab.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

export default SidebarTab;
