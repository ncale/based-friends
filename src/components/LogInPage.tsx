import AuthButton from "./AuthButton"

export default function LogInPage() {
    return (
        <>
            <p className="text-white justify-center hidden md:flex">Please log in</p>
            <span className="flex items-center justify-center mt-2 md:hidden" style={{height: "60vh"}}><AuthButton/></span>
        </>
    )
}