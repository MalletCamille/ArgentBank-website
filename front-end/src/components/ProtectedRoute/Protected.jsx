import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
    const isLogged = useSelector((state) => state.login.logged);

    if(!isLogged) {
        return <Navigate to="/" replace />
    }
    return children;
}

export default Protected;