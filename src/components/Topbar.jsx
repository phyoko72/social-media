import {Message, Notifications, Person, Search} from "@mui/icons-material"

const Topbar = () => {
    return (
        <>
            <div className=" w-full h-[60px] bg-blue-600 text-white/95 flex items-center sticky top-0">
                <div className="left flex-[3]">
                    <h1 className=" text-2xl font-bold cursor-pointer text-center">
                        Talk2Me
                    </h1>
                </div>
                <div className="center flex-[5]">
                    <div className=" bg-white rounded-2xl px-1 text-black flex items-center">
                        <Search style={{fontSize: "20px"}} />
                        <input
                            type="text"
                            name="search"
                            placeholder="Search..."
                            id=""
                            className=" w-10/12 outline-none p-1"
                        />
                    </div>
                </div>
                <div className="right flex-[4]">
                    <div className=" flex justify-around items-center">
                        <div className="link text-sm font-semibold flex gap-2 cursor-pointer">
                            <span>Homepage</span>
                            <span>Timeline</span>
                        </div>
                        <div className="icon flex justify-around gap-3 items-center">
                            <div className=" relative">
                                <Person />
                                <span className=" absolute text-xs -top-1 -right-3 bg-red-600 w-5 h-5 flex justify-center items-center rounded-full">
                                    1
                                </span>
                            </div>
                            <div className=" relative">
                                <Message />
                                <span className=" absolute text-xs -top-1 -right-3 bg-red-600 w-5 h-5 flex justify-center items-center rounded-full">
                                    2
                                </span>
                            </div>
                            <div className=" relative">
                                <Notifications />
                                <span className=" absolute text-xs -top-1 -right-3 bg-red-600 w-5 h-5 flex justify-center items-center rounded-full">
                                    1
                                </span>
                            </div>
                        </div>
                        <div className="image">
                            <img
                                src="/assets/person/2.jpeg"
                                alt="profile"
                                className=" w-10 h-10 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topbar
