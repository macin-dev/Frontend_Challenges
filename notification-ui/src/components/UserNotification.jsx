import UserPhoto from "./UserPhoto.jsx";
import UserContent from "./UserContent.jsx";
import Indicator from "./Indicator.jsx";

import "./UserNotification.css";


function UserNotification() {
    return (<aside className="user__notification">
        <UserPhoto/>
        <UserContent/>
        <Indicator/>
    </aside>)
        ;
}

export default UserNotification;