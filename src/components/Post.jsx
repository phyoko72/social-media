import {MoreVert} from "@mui/icons-material"

const Post = () => {
    return (
        <>
            <div className=" box-shadow bg-white mt-3 p-2">
                <div className="top flex justify-between items-center">
                    <div className="topLeft flex items-center">
                        <img
                            src="/assets/person/4.jpeg"
                            alt="profile"
                            className=" w-11 h-11 rounded-full object-cover"
                        />
                        <span className="name ms-1 me-2">Angella</span>
                        <span className="time text-sm">5 min ago</span>
                    </div>
                    <div className="topRight cursor-pointer">
                        <MoreVert />
                    </div>
                </div>
                <div className="center my-2">
                    <p>It's my first post.</p>
                    <img
                        src="/assets/post/1.jpeg"
                        alt="post"
                        className=" max-w-full max-h-[400px] mt-1 object-contain m-auto"
                    />
                </div>
                <div className="bottom flex justify-between items-center">
                    <div className="bottomLeft flex gap-x-1 items-center">
                        <img
                            src="/assets/like.png"
                            alt="Like"
                            className=" w-7"
                        />
                        <img
                            src="/assets/heart.png"
                            alt="Heart"
                            className=" w-7"
                        />
                        <span>32 people like it</span>
                    </div>
                    <div className="bottomRight cursor-pointer hover:underline underline-offset-1">
                        <span>9 comments</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
