import "./Container.css"
import Header from "./Header.jsx";
import Tabs from "./Tabs.jsx";
import UserNotification from "./UserNotification.jsx";
import NotificationContent from "./NotificationContent.jsx";

function Container (){
    return <main className="container">
        <Header />
        <Tabs />
        <NotificationContent>
            <UserNotification />
            <UserNotification />
            <UserNotification />
        </NotificationContent>
    </main>
}

export default Container