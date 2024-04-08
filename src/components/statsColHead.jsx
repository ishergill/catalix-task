import PropTypes from "prop-types";

const StatsColHead = ({ title, number, chart }) => {
  return (
    <div className="statsColHead">
      <h2 className="statsHeadingTitle">{title}</h2>
      <h1 className="statsHeadingNumber">{number}</h1>
      <img src={chart} alt="" className="statsHeadingChart" />
    </div>
  );
};

StatsColHead.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  chart: PropTypes.object.isRequired,
};

export default StatsColHead;
