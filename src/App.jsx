import './scss/app.scss'
import {Header} from "./componets/index.jsx";
import {Cart, Home} from "./pages";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";


function App() {
    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('http://localhost:5173/pizza/db.json')
            .then(resp => resp.json())
            .then(json => setPizzas(json.pizzas))
    }, [])

    return (
        <>
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path="/" element={ <Home pizzas={pizzas} />} />

                        <Route path="/cart" element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App
