import notification from "../assets/notification.svg"
import comment from "../assets/comment.svg";
import setting from "../assets/settings2.svg";
import profile from "../assets/profile.svg"

const UserControls = () => {
    return (

        <div className="userControls">
            <div className="notification">
                <img src={notification} alt="" />
            </div>

            <div className="comment">
                <img src={comment} alt="" />
            </div>

            <div className="setting">
                <img src={setting} alt="" />
            </div>

            <div className="profile">
                <img src={profile} alt="" />
            </div>
        </div>
    )
}

export default UserControls;