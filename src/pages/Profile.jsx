import Feed from "../components/Feed"
import Left from "../components/Left"
import ProfileRight from "../components/ProfileRight"
import Topbar from "../components/Topbar"

const Profile = () => {
    return (
        <>
            <>
                <Topbar />
                <div className=" flex justify-between min-h-screen">
                    <Left />
                    <div className="right flex-[9]">
                        <div className="rightTop">
                            <div className=" relative bg-yellow-700 p-2 h-72">
                                <img
                                    src="assets/post/canada.png"
                                    alt="cover"
                                    className=" w-full h-64 object-cover"
                                />
                                <img
                                    src="assets/person/2.jpeg"
                                    alt="profile"
                                    className=" w-32 h-32 rounded-full object-cover absolute -bottom-9 left-0 right-0 m-auto border-4
                                      border-white"
                                />
                            </div>
                            <div className=" text-center mt-12 mb-6">
                                <h3 className=" text-3xl font-semibold">
                                    William James
                                </h3>
                                <span className=" text-lg">
                                    Hello My Friends
                                </span>
                            </div>
                        </div>
                        <div className="rightBottom flex">
                            <Feed />
                            <ProfileRight />
                        </div>
                    </div>
                </div>
            </>
        </>
    )
}

export default Profile
