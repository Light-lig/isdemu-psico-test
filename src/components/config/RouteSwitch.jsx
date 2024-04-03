import { Routes, Route } from "react-router-dom";
import Layout from "../commos/Layout";
import { Main } from "../../views/main";
import { Instrucciones } from "../../views/Instrucciones";
import Questions from "../../views/Questions";
import NotFound from "../commos/NotFound";

const RouteSwitch = () =>   
    <Routes>
        <Route element={<Layout />}>
            <Route element={<Main />} path="/" />
            <Route element={<Instrucciones />} path="instrucciones"/>
            <Route element={<Questions />} path="/questions" />
            <Route element={<NotFound />} path="*"/>
        </Route>
    </Routes>


export default RouteSwitch;
