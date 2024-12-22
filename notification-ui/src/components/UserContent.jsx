function UserPhoto () {
    return <div className="user__notification-content">
        <div className="notification__content-sub">
                <span className="notification__user-action">
                    <strong className="notification__user-name">@frankiesullivan </strong>
                    followed you
                </span>
            <span className="notification__date">Thursday 4:20pm</span>
        </div>
        <span className="notification__posting-time">2 hours ago</span>
    </div>
}

export default UserPhoto;