//default landing if user is logged in

import { useEffect, useState } from "react"
import { Link, navigate, useNavigate } from "react-router-dom"



export const Profiles = () => {
    const navigate = useNavigate()

    const clickNewProfile = (e) => {
        e.preventDefault()
        navigate("/newprofile")
    }

    return <>
    <p>list user's profiles</p>
    <button onClick={(e)=> clickNewProfile(e)}>Create new profile</button>
    </> 
}
