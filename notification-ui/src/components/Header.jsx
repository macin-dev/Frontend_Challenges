import "./Header.css"

function Header() {
    return (
        <header className="header">
            <span className="header__title">Your Notifications</span>
            <div className="header__state">
                <img src="/src/assets/double-check.svg" alt="double check" />
                <span>Mark all as read</span>
            </div>
        </header>
    )
}

export default Header;