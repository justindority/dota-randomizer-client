//default landing if user is logged in

import { useEffect, useState } from "react"
import { Link, Navigate, useNavigate } from "react-router-dom"

export const Profiles = () => {
   return <>
    <p>list user's profiles</p>
    <button onClick={()=> Navigate("/profileeditor")}>Create new profile</button>

</> 
}

