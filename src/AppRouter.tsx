import { Route, Routes } from "react-router"
import HomePage from "./views/HomePage/HomePage"
import LoginPage from "./views/Login/LoginPage"


function AppRouter() {


    return (
        <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage/>}/>
        </Routes>
    )
}

export default AppRouter