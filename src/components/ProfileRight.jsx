const ProfileRight = () => {
    return (
        <>
            <div className=" bg-yellow-500 flex-[3.5]">
                <div className=" p-2">
                    <h4>User Information</h4>
                    <div className="info">
                        <div className="current">
                            <span>City: </span>
                            <span>London</span>
                        </div>
                        <div className="from">
                            <span>From: </span>
                            <span>New York</span>
                        </div>
                        <div className="relation">
                            <span>Relationship: </span>
                            <span>Single</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileRight
