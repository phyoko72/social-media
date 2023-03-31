import Post from "./Post"
import Share from "./Share"

const Feed = () => {
    return (
        <>
            <div className=" bg-blue-600 flex-[5.5]">
                <div className=" p-5">
                    <Share />
                    <Post />
                </div>
            </div>
        </>
    )
}

export default Feed
