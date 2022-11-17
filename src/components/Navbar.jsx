import React from "react";
import Auth from "./Navbar/Auth";
import { useLocation } from "react-router-dom";
import Navigation from "./Navbar/Navigation";

const Navbar = () => {

    const location = useLocation();

    const { pathname } = location

    const searchRoute = pathname.split("/");

    return(
        <nav className="h-16 flex items-center justify-between px-8">
            <Navigation />

            {
                searchRoute[1] === "search" && (
                    <div>
                        Search section
                    </div>
                )
            }

            <Auth />
        </nav>
    )
}

export default Navbar;