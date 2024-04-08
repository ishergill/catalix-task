// !components
import BottomStats from "./bottomStats";
import MiddleStats from "./middleStats";
import TextField from "./textField";
import TopStats from "./topStats";
import UserControls from "./userControls";
import UserOptions from "./userOptions";

const Dashboard = () => {
  return (
    <div className="dashboardFrame">
      <div className="dashboard">
        <div className="panel">
          <TextField />

          <UserControls />
        </div>

        <UserOptions />

        <TopStats />

        <MiddleStats />

        <BottomStats />
      </div>
    </div>
  );
};

export default Dashboard;
