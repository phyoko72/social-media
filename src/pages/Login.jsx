import {Link} from "react-router-dom"

const Login = () => {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className=" w-[70%] h-[70%] bg-teal-500 flex justify-around items-center">
                    <div className="left flex-1 justify-self-center text-center">
                        <h1 className=" text-4xl font-semibold text-blue-600">
                            Two Digits
                        </h1>
                        <span>Connect to the world</span>
                    </div>
                    <div className="right flex-1 bg-slate-300 p-6 h-[300px] flex flex-col justify-evenly ">
                        <form>
                            <input
                                type="text"
                                name="username"
                                id="usrename"
                                placeholder="Enter Username"
                                className=" block mb-3 outline-none p-2 rounded w-full h-12"
                            />
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter Password"
                                className=" block mb-3 outline-none p-2 rounded w-full h-12"
                            />
                            <button className=" w-full py-2 mb-3 bg-blue-600 text-white rounded text-lg">
                                Login
                            </button>
                        </form>
                        <div className=" text-center mb-3">
                            <Link to={"#"}>Forgot Password?</Link>
                        </div>
                        <div className=" text-center py-2 bg-green-600 text-white rounded text-base">
                            <Link to={"/sign-up"}>Create New Account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
