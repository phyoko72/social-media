const ProfileRight = () => {
    return (
        <>
            <div className=" bg-yellow-500 flex-[3.5]">
                <div className=" p-2">
                    <h4 className=" my-2 font-semibold text-lg">
                        User Information
                    </h4>
                    <div className="info">
                        <div className="current">
                            <span className=" mr-2 font-semibold">City: </span>
                            <span>London</span>
                        </div>
                        <div className="from">
                            <span className=" mr-2 font-semibold">From: </span>
                            <span>New York</span>
                        </div>
                        <div className="relation">
                            <span className=" mr-2 font-semibold">
                                Relationship:{" "}
                            </span>
                            <span>Single</span>
                        </div>
                    </div>
                    <h4 className=" my-3 font-semibold text-lg">
                        User Friends
                    </h4>
                    <div className=" flex flex-wrap gap-3 justify-evenly border-4 border-white p-2">
                        <div className="">
                            <img
                                src="assets/person/3.jpeg"
                                alt="friend"
                                className=" w-20 h-20 rounded-md object-cover"
                            />
                            <span>John Doe</span>
                        </div>
                        <div className="">
                            <img
                                src="assets/person/4.jpeg"
                                alt="friend"
                                className=" w-20 h-20 rounded-md object-cover"
                            />
                            <span>John Doe</span>
                        </div>
                        <div className="">
                            <img
                                src="assets/person/5.jpeg"
                                alt="friend"
                                className=" w-20 h-20 rounded-md object-cover"
                            />
                            <span>John Doe</span>
                        </div>
                        <div className="">
                            <img
                                src="assets/person/7.jpeg"
                                alt="friend"
                                className=" w-20 h-20 rounded-md object-cover"
                            />
                            <span>John Doe</span>
                        </div>
                        <div className="">
                            <img
                                src="assets/person/8.jpeg"
                                alt="friend"
                                className=" w-20 h-20 rounded-md object-cover"
                            />
                            <span>John Doe</span>
                        </div>
                        <div className="">
                            <img
                                src="assets/person/9.jpeg"
                                alt="friend"
                                className=" w-20 h-20 rounded-md object-cover"
                            />
                            <span>John Doe</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileRight
