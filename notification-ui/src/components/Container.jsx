import "./Container.css"
import Header from "./Header.jsx";
import Tabs from "./Tabs.jsx";

function Container (){
    return <main className="container">
        <Header />
        <Tabs />
    </main>
}

export default Container