import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelPage } from "./marvel"
import { DCPage } from "./dc"
import { Navbar } from "./navBar"

export const HeroesRouter = ()=>{
    return (
        <div className="container">
            <Navbar/>
            <Routes>
                <Route path="" element={<Navigate to="marvel" />}></Route>
                <Route path="marvel" element={<MarvelPage />}></Route>
                <Route path="dc" element={<DCPage />}></Route>
                {/* search
                hero */}
                <Route path="/*"  element={<Navigate to="marvel" />}></Route>
            </Routes>
        </div>
    )
}