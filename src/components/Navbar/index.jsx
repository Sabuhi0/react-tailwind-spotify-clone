import React from "react"
import Auth from "./Auth"
import { useLocation } from "react-router-dom"
import Navigation from "./Navigation"
import Search from "./Search"
import TopBarMenu from "./TopBarMenu"

const Navbar = () => {
  const location = useLocation()

  const { pathname } = location

  const searchRoute = pathname.split("/")

  return (
    <nav className="h-16 flex items-center justify-between gap-4 px-8">
      <Navigation />

      {searchRoute[1] === "search" && <Search />}
      {searchRoute[1] === "collection" && <TopBarMenu />}

      <Auth />
    </nav>
  )
}

export default Navbar
