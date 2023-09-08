import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const NavBar = ({}) => {
    const navigate = useNavigate()

    return(<>

        <p>Randomizer</p>
        <p>Profiles</p>
        <p>Log Out</p>

    </>)

}