import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./auth/LoginPage"
import { HeroesRouter } from "./heores/heroesRouter"

export const AppRouter = ()=>{

    return (
        <Routes>
            <Route path="/login" element={< LoginPage/>}></Route>
            <Route path="/" element={< HeroesRouter/>}></Route>
            <Route path="/*" element={< HeroesRouter/>}></Route>
        </Routes>
    )
}