import {IoLocationSharp} from "react-icons/io5";

function LocationButton() {
    return (
        <div className="location-button nav-align">
            <div className={"location-icon"}><IoLocationSharp/></div>
            <h4 className={"location-divider"}>|</h4>
            <div className={"location-button-text"}>
                <h3>Your location</h3>
                <h1>Seoul, Tokyo</h1>
            </div>
        </div>
    )
}

export default LocationButton;