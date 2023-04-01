import OnlineFriends from "./OnlineFriends"

const Right = () => {
    return (
        <>
            <div className=" bg-yellow-500 flex-[3.5]">
                <div className=" p-2">
                    <div className="birthday flex items-center gap-2">
                        <img
                            src="/assets/gift.png"
                            alt="birthday"
                            className=" w-7"
                        />
                        <span className=" leading-5">
                            <b>Pola</b> and <b>3 other friends</b> have a
                            birthday today.
                        </span>
                    </div>
                    <img
                        src="/assets/ad.png"
                        alt="ads"
                        className=" rounded my-2"
                    />
                    <br />
                    <h4>Online Friends</h4>
                    <div className=" my-2 Online-Fri">
                        <OnlineFriends />
                        <OnlineFriends />
                        <OnlineFriends />
                        <OnlineFriends />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Right
