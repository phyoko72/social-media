import {useContext, useEffect, useState} from "react"
import Post from "./Post"
import Share from "./Share"
import {DataContext} from "../../context/DataContext"

const Feed = () => {
    const {state, dispatch, usingDispatch} = useContext(DataContext)
    const [text, setText] = useState("")
    console.log("state: ", state)

    useEffect(() => {
        const fetching = async () => {
            try {
                const res = await fetch("/api/posts")
                const data = await res.json()
                console.log("Feed Data: ", data)
            } catch (err) {
                console.log("Feed Err: ", err)
            }
        }
        fetching()
    }, [])
    return (
        <>
            <div className=" bg-blue-600 flex-[5.5]">
                <div className=" p-5">
                    <h1 className=" text-white text-3xl">State: {state.num}</h1>
                    <input
                        type="text"
                        name="text"
                        id=""
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <br />
                    <button
                        onClick={() =>
                            dispatch({type: usingDispatch.PUSH, payload: text})
                        }
                    >
                        Add Text
                    </button>
                    <br />
                    <button onClick={() => dispatch({type: usingDispatch.ADD})}>
                        Increment
                    </button>
                    <button
                        onClick={() => dispatch({type: usingDispatch.MINUS})}
                    >
                        Decrement
                    </button>
                    <Share />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </>
    )
}

export default Feed
