import PropTypes from "prop-types";

const StatsRow = ({
  pageName,
  pageViews,
  uniqueViews,
  avgTime,
  extrances,
  exit,
  pageValue,
  parentStats,
}) => {
  let values = Object.values(parentStats);

  // console.log(values)

  return (
    <tr>
      <td className="pageName">{"/" + pageName}</td>
      <td className="data">
        <p>{pageViews}</p>{" "}
        <p className="dataPercent">
          {" (" +
            ((parseInt(pageViews) / parseInt(values[0])) * 100).toFixed(2) +
            "%)"}{" "}
        </p>
      </td>
      <td className="data">
        <p>{uniqueViews}</p>{" "}
        <p className="dataPercent">
          {" (" +
            ((parseInt(uniqueViews) / parseInt(values[1])) * 100).toFixed(2) +
            "%)"}{" "}
        </p>
      </td>
      <td className="data">
        <p>{avgTime}</p>
      </td>
      <td className="data">
        <p>{extrances}</p>{" "}
        <p className="dataPercent">
          {" (" +
            ((parseInt(extrances) / parseInt(values[3])) * 100).toFixed(2) +
            "%)"}{" "}
        </p>
      </td>
      <td className="data">
        <p>{exit}</p>{" "}
        <p className="dataPercent">
          {" (" +
            ((parseInt(exit) / parseInt(values[4])) * 100).toFixed(2) +
            "%)"}{" "}
        </p>
      </td>
      <td className="data">
        <p>{"$" + pageValue}</p>{" "}
        <p className="dataPercent">
          {" (" +
            ((parseInt(pageValue) / parseInt(values[5])) * 100).toFixed(2) +
            "%)"}{" "}
        </p>
      </td>
    </tr>
  );
};

StatsRow.propTypes = {
  pageName: PropTypes.string.isRequired,
  pageViews: PropTypes.number.isRequired,
  uniqueViews: PropTypes.number.isRequired,
  avgTime: PropTypes.number.isRequired,
  extrances: PropTypes.number.isRequired,
  exit: PropTypes.number.isRequired,
  pageValue: PropTypes.number.isRequired,
  parentStats: PropTypes.object.isRequired,
};

export default StatsRow;
