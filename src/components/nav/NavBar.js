import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const NavBar = ({}) => {
    const navigate = useNavigate()

    return(<>

        <button onClick={()=> navigate("/random")} >Random Me</button>
        <button onClick={()=> navigate("/profiles")}>Profiles</button>
        <button className="navbar__item navbar__logout" onClick={()=> {localStorage.removeItem("dota_token") 
                                                                        navigate("/", {replace: true})}}>
           
      
                Logout
            </button>

    </>)

}