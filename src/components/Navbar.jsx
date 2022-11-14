import React from "react";
import Auth from "./Navbar/Auth";
import Navigation from "./Navbar/Navigation";

const Navbar = () => {
    return(
        <nav className="h-16 flex items-center justify-between px-8">
            <Navigation />
            <Auth />
        </nav>
    )
}

export default Navbar;