import {BrowserRouter, Route, Router, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/log-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
