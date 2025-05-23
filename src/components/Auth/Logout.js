import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useUserContext from "../../contexts/UserContext";

const Logout = () => {
    const { logout } = useUserContext();

    useEffect(() => {
        document.title = "LinkUp | Signup";
        return function () {
            document.title = "LinkUp";
        };
    }, []);

    logout();
    return <Navigate to="/signin" />;
};

export default Logout;
