import './scss/app.scss'
import axios from "axios";

import {Header} from "./componets/index.jsx";
import {Cart, Home} from "./pages";
import {json, Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";


function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5173/pizza/db.json')
            .then( (resp)=>{setPizzas(resp.data.pizzas)} )
            .catch(e=>{console.log(`Error fetching data. ${e}`)})
        }, [])

    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home pizzas={pizzas}/>}/>

                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
