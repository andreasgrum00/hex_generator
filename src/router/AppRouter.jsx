import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

function AppRouter()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;