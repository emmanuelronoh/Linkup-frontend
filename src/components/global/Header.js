import Avatar from "@mui/material/Avatar";
import React from "react";
import useUserContext from "../../contexts/UserContext";
import { useLocation } from "react-router-dom";
import useThemeContext from "../../contexts/themeContext";

const Header = (props) => {
    const {
        user,
        profileData: { username, profile_pic },
    } = useUserContext();
    const { darkTheme, setDarkTheme } = useThemeContext();
    const { isError } = props;
    const location = useLocation();
    let cur = location.pathname.split("/").at(1);
    if (cur === "") cur = "home";
    return (
        <header className="flex items-center justify-center pl-12 sm:pl-2 p-2 h-14 absolute w-full bg-gray-100 border-0 text-gray-900 sm:px-8 dark:bg-black">
            <div className="max max-w-6xl w-full flex justify-between">
                <div
                    className={`flex gap-1 text-2xl text-purple-400 items-center`}
                    aria-hidden={true}
                >
                    <span className="text-3xl">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
            fill="#6B21A8"  
            fillRule="evenodd"
            d="M1.25 9A6.75 6.75 0 0 1 8 2.25h4a6.75 6.75 0 0 1 0 13.5h-2a.75.75 0 0 1 0-1.5h2a5.25 5.25 0 1 0 0-10.5H8a5.25 5.25 0 0 0-3.913 8.75a.75.75 0 0 1-1.118 1A6.73 6.73 0 0 1 1.25 9M12 9.75a5.25 5.25 0 1 0 0 10.5h4a5.25 5.25 0 0 0 3.913-8.75a.75.75 0 1 1 1.118-1A6.75 6.75 0 0 1 16 21.75h-4a6.75 6.75 0 0 1 0-13.5h2a.75.75 0 0 1 0 1.5z"
            clipRule="evenodd"
        />
    </svg>
</span>

                    <h1 className="font-bold italic inline-block capitalize">
                        {isError ? "LinkUp" : cur}
                    </h1>
                </div>
                <div className="flex justify-between items-center gap-2 lg:gap-3">
                    <button
                        className="text-purple-400 h-full text-2xl gap-1 justify-center"
                        onClick={() => setDarkTheme((p) => !p)}
                    >
                        {darkTheme ? (
                            <iconify-icon icon="carbon:light">Light Theme</iconify-icon>
                        ) : (
                            <iconify-icon icon="bi:moon-stars-fill">Dark theme</iconify-icon>
                        )}
                    </button>
                    <Avatar src={user && profile_pic} alt={user && username}>
                        {username && username.at(0).toUpperCase()}
                    </Avatar>
                    <p className="text-purple-400 text-lg xm:static fixed -top-36 capitalize">
                        {user && username}
                    </p>
                </div>
            </div>
        </header>
    );
};

export default Header;
