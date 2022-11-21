import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Signin from "./Signin";
import Signup from "./Signup";
import Balance from "./Balance";
import Income from "./Income";
import Outcome from "./Outcome";


export default function App(){



    return(
        <BrowserRouter>
        <GlobalStyle/>
        <Routes>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/" element={<Balance/>}/>
        <Route path="/income" element={<Income/>}/>
        <Route path="/outcome" element={<Outcome/>}/>
        
        </Routes>
        </BrowserRouter>
    )
}