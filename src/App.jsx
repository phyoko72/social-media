import Feed from "./components/Feed"
import Left from "./components/Left"
import Right from "./components/Right"
import Topbar from "./components/Topbar"

function App() {
    return (
        <>
            <Topbar />
            <div className=" flex justify-between h-screen">
                <Left />
                <Feed />
                <Right />
            </div>
        </>
    )
}

export default App
