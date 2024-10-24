import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store.js";

createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <Router basename="/pizza">
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    // </StrictMode>,
);