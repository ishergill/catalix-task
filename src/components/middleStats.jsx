// !components
import MiddleStatsCard from "./middleStatsCard";

// !assets
import { greenDot, redDot } from "../assets";

const MiddleStats = () => {
  return (
    <div className="middleStats">
      <MiddleStatsCard
        title="On Time"
        heading1="Completed Iterations"
        value1="7"
        heading2="Total Iterations"
        value2="9"
        heading3="% Iterations Done"
        value3="77.8%"
        dot={greenDot}
      />

      <MiddleStatsCard
        title="On Scope"
        heading1="Story Points Done"
        value1="3200"
        heading2="Total Story Points"
        value2="4230"
        heading3="% Stories Done"
        value3="70.9%"
        dot={greenDot}
      />

      <MiddleStatsCard
        title="On Velocity"
        heading1="Average Velocity"
        value1="428.6"
        heading2="Required Velocity"
        value2="615.0"
        dot={redDot}
      />
    </div>
  );
};

export default MiddleStats;
