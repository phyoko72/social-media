import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <div className=" w-full h-screen flex justify-center items-center bg-black/90 text-white/90">
                <div>
                    <h1 className=" text-4xl font-bold ">
                        404 || Page Not Found
                    </h1>
                    <p className=" text-center mt-2 text-xl">
                        Go to{" "}
                        <Link to={"/"} className=" underline ">
                            Home
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    )
}

export default NotFound
