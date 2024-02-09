import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './NavBar.css'

export const NavBar = ({}) => {
    const navigate = useNavigate()

    return(<>
        <ul class="nav-links">
            <li onClick={()=> navigate("/random")}><a>random me</a></li>
            <li onClick={()=> navigate("/profiles")}><a>profiles</a></li>
            <li onClick={()=> {localStorage.removeItem("dota_token") 
                    navigate("/", {replace: true})}}><a>log out</a></li>
        </ul>

    </>)

}