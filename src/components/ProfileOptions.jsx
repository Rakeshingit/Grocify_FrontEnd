import {FiPackage} from "react-icons/fi";
import {PiSignOutBold} from "react-icons/pi";
import {ImProfile} from "react-icons/im";
import {Link} from "react-router-dom";

function ProfileOptions(props) {

    function signUserOut() {
        sessionStorage.clear();
    }

    return (
        <div className="ProfileOptions-container" id={"profile-cont"}>
            <Link to={"#"}>
                <div className="ProfileOptions">
                    <FiPackage/>
                    <p>Your Orders</p>
                </div>
            </Link>
            <div className="ProfileOptions">
                <ImProfile/>
                <p>Your Profile</p>
            </div>
            <div onClick={signUserOut} className="ProfileOptions">
                <PiSignOutBold/>
                <p>Log out</p>
            </div>
        </div>
    )
}


export default ProfileOptions;