import {
    Bookmark,
    Event,
    Group,
    HelpOutline,
    PlayCircleFilledOutlined,
    RssFeed,
    School,
    WorkOutline,
} from "@mui/icons-material"

const Left = () => {
    return (
        <>
            <div className=" bg-teal-500 flex-[3] overflow-y-auto sticky top-0">
                <div className=" px-8 py-10">
                    <ul>
                        <li className="flex items-center gap-6 mb-4">
                            <RssFeed />
                            <span>Feed</span>
                        </li>
                        <li className="flex items-center gap-6 mb-4">
                            <PlayCircleFilledOutlined />
                            <span>Videos</span>
                        </li>
                        <li className="flex items-center gap-6 mb-4">
                            <Group />
                            <span>Group</span>
                        </li>
                        <li className="flex items-center gap-6 mb-4">
                            <Bookmark />
                            <span>Bookmarks</span>
                        </li>
                        <li className="flex items-center gap-6 mb-4">
                            <HelpOutline />
                            <span>Questions</span>
                        </li>
                        <li className="flex items-center gap-6 mb-4">
                            <WorkOutline />
                            <span>Jobs</span>
                        </li>

                        <li className="flex items-center gap-6 mb-4">
                            <Event />
                            <span>Events</span>
                        </li>

                        <li className="flex items-center gap-6 mb-4">
                            <School />
                            <span>Courses</span>
                        </li>
                    </ul>
                    <button className=" bg-slate-300 px-2 py-1 rounded">
                        Show More
                    </button>
                    <hr className=" my-4" />
                    <ul>
                        <li className="mb-3 flex items-center gap-3">
                            <img
                                src="/assets/person/10.jpeg"
                                alt="friend"
                                className=" w-9 h-9 rounded-full object-cover"
                            />
                            <span className=" font-medium">Sofia</span>
                        </li>
                        <li className="mb-3 flex items-center gap-3">
                            <img
                                src="/assets/person/10.jpeg"
                                alt="friend"
                                className=" w-9 h-9 rounded-full object-cover"
                            />
                            <span className=" font-medium">Sofia</span>
                        </li>
                        <li className="mb-3 flex items-center gap-3">
                            <img
                                src="/assets/person/10.jpeg"
                                alt="friend"
                                className=" w-9 h-9 rounded-full object-cover"
                            />
                            <span className=" font-medium">Sofia</span>
                        </li>
                        <li className="mb-3 flex items-center gap-3">
                            <img
                                src="/assets/person/10.jpeg"
                                alt="friend"
                                className=" w-9 h-9 rounded-full object-cover"
                            />
                            <span className=" font-medium">Sofia</span>
                        </li>
                        <li className="mb-3 flex items-center gap-3">
                            <img
                                src="/assets/person/10.jpeg"
                                alt="friend"
                                className=" w-9 h-9 rounded-full object-cover"
                            />
                            <span className=" font-medium">Sofia</span>
                        </li>
                        <li className="mb-3 flex items-center gap-3">
                            <img
                                src="/assets/person/10.jpeg"
                                alt="friend"
                                className=" w-9 h-9 rounded-full object-cover"
                            />
                            <span className=" font-medium">Sofia</span>
                        </li>
                        <li className="mb-3 flex items-center gap-3">
                            <img
                                src="/assets/person/10.jpeg"
                                alt="friend"
                                className=" w-9 h-9 rounded-full object-cover"
                            />
                            <span className=" font-medium">Sofia</span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Left
