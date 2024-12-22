import "./NotificarionContent.css";

function NotificationContent({ children}) {
    return <section className="notification__allContent">
        { children }
    </section>
}

export default NotificationContent;