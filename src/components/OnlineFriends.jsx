const OnlineFriends = () => {
    return (
        <>
            <div className=" flex items-center gap-2 my-3">
                <div className="w-fit relative">
                    <img
                        src="/assets/person/8.jpeg"
                        alt="online-fri"
                        className=" w-10 h-10 rounded-full object-cover"
                    />
                    <span className="absolute top-0 right-0 border-white border-2 block bg-green-500 w-3 h-3 rounded-full"></span>
                </div>
                <span className=" font-semibold">Jessica</span>
            </div>
        </>
    )
}

export default OnlineFriends
