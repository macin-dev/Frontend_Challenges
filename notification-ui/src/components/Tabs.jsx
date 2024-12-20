import "./Tabs.css"

const tabs = [{
    id: 1, text: "View all", count: 12, isActive: true,
}, {
    id: 2, text: "Mentions", count: 6, isActive: false,
}, {
    id: 3, text: "Followers", count: 4, isActive: false,
}, {
    id: 4, text: "Invites", count: 2, isActive: false,
}]

function Tabs() {
    return (<div className="tab__container">
        {
            tabs.map(tab => (
                <Tab key={tab.id} text={tab.text} isActive={tab.isActive} count={tab.count} />
            ))
        }
    </div>)
}

function Tab({ text, count, isActive }) {
    return (<div className={`single__tab ${isActive ? "isActive" : ""}`} >
        <span className={`single__tab-text ${isActive ? "highlight" : ""}`}>{text}</span>
        <span className={`single__tab-count ${isActive ? "highlight" : ""}`}>{count}</span>
    </div>)
}

export default Tabs;