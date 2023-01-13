import { Route, Routes } from "react-router"
import LoginPage from "./views/Login/LoginPage"


function AppRouter() {
    return (
        <Routes>
                <Route path="/" element={<LoginPage />} />
        </Routes>
    )
}

export default AppRouter