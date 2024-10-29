import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <MovieProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MovieProvider>
);
