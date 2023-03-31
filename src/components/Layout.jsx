import Topbar from "./Topbar"

const Layout = ({children}) => {
    return (
        <>
            <main className=" max-w-screen-md m-auto">{children}</main>
        </>
    )
}

export default Layout
