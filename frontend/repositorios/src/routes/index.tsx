import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { RepositorioTela } from "../pages";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<RepositorioTela />}></Route>
            </Switch>
        </BrowserRouter>
    );

}