import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";

export default function Rotas(){
    return(
        <Routes>
            <Route path="/" element={ <Dashboard/>}/>
            <Route path="*" element={<h1> Nao encontrado </h1>}/>
        </Routes>
    )
}