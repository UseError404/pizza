import './scss/app.scss'
import axios from "axios";
import {useDispatch} from "react-redux";
import {Route, Routes} from "react-router-dom";
import React from "react";
import {Header} from "./componets/index.jsx";
import {Cart, Home} from "./pages";

function App() {

    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>

                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

 export default App;