// !assets
import { searchIcon, cross } from "../assets"

const TextField = () => {
    return (
        <div className="textField">
            <div className="stateLayer">
                <div className="leadingIcon">
                    <img src={searchIcon} alt="" />
                </div>

                <div className="content">
                    <div className="inputText">
                        <input type="text" placeholder="Search by profile, setting, artifact, etc..." />
                    </div>

                    <div className="labelText">
                        <p>Search</p>
                    </div>
                </div>

                <div className="trailingIcon">
                    <img src={cross} alt=""  />
                </div>
            </div>
        </div>
    )
}

export default TextField;