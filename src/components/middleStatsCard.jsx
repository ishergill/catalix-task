import PropTypes from "prop-types";

const MiddleStatsCard = ({
  title,
  heading1,
  value1,
  heading2,
  value2,
  heading3,
  value3,
  dot,
}) => {
  return (
    <div className="middleStatsCard">
      <h1 className="middleStatsTitle">{title}</h1>

      <img src={dot} alt="" className="middleStatsDot" />

      <div className="middleStatsContent">
        <div className="middleStatsHeading">
          <p className="heading">{heading1}</p>
          <p className="value">{value1}</p>
        </div>

        <div className="middleStatsHeading">
          <p className="heading">{heading2}</p>
          <p className="value">{value2}</p>
        </div>

        <div className="middleStatsHeading">
          <p className="heading">{heading3}</p>
          <p className="value">{value3}</p>
        </div>
      </div>
    </div>
  );
};

MiddleStatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  heading1: PropTypes.string.isRequired,
  value1: PropTypes.number.isRequired,
  heading2: PropTypes.string.isRequired,
  value2: PropTypes.number.isRequired,
  heading3: PropTypes.string.isRequired,
  value3: PropTypes.number.isRequired,
  dot: PropTypes.bool.isRequired,
};

export default MiddleStatsCard;
