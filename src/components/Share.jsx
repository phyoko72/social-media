import {EmojiEmotions, Label, PermMedia, Room} from "@mui/icons-material"

const Share = () => {
    return (
        <>
            <div className=" w-full h-40 bg-white rounded box-shadow">
                <div className=" p-4 h-full flex flex-col justify-between">
                    <div className="top mb-2 flex items-center gap-3">
                        <img
                            src="/assets/person/1.jpeg"
                            alt="profile"
                            className=" w-11 h-11 rounded-full object-cover"
                        />
                        <input
                            type="text"
                            name="status"
                            id=""
                            placeholder="What's on your mind?"
                            className=" w-4/5 outline-none self-end"
                        />
                    </div>
                    <hr className=" my-2" />
                    <div className="bottom">
                        <div className=" flex justify-around items-center">
                            <div>
                                <PermMedia
                                    htmlColor="tomato"
                                    className=" mr-1"
                                />
                                <span>Photo or Video</span>
                            </div>

                            <div>
                                <Label htmlColor="blue" className=" mr-1" />
                                <span>Tag</span>
                            </div>

                            <div>
                                <Room htmlColor="green" className=" mr-1" />
                                <span>Location</span>
                            </div>

                            <div>
                                <EmojiEmotions
                                    htmlColor="gold"
                                    className=" mr-1"
                                />
                                <span>Feeling</span>
                            </div>
                            <button className=" px-2 py-1 bg-slate-300 rounded">
                                Share
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Share
