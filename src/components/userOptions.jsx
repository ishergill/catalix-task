import plus from "../assets/plus.svg";

const UserOptions = () => {
  const buttons = [
    "Create Report",
    "Share this dashboard",
    "Select Duration",
    "Compare with Duration",
  ];

  return (
    <div className="userOptions">
      {buttons.map((button, i) => {
        return (
          <div
            key={i}
            className={"userOptionsButton " + (i == 0 ? "createButton" : "")}
          >
            {i == 0 ? <img src={plus} alt="" /> : ""}

            <p className={i > 0 ? (i > 1 ? "slateButton" : "greenButton") : ""}>
              {button}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UserOptions;
