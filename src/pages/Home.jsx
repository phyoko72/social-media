import Feed from "../components/Feed"
import Left from "../components/Left"
import Right from "../components/Right"
import Topbar from "../components/Topbar"

const Home = () => {
    return (
        <>
            <>
                <Topbar />
                <div className=" flex justify-between min-h-screen">
                    <Left />
                    <Feed />
                    <Right />
                </div>
            </>
        </>
    )
}

export default Home
