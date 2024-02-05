//default landing if user is logged in

import { useEffect, useState } from "react"
import { Link, navigate, useNavigate } from "react-router-dom"
import { deleteProfile, getMyProfiles } from "../../managers/profileManager"



export const Profiles = () => {
    const navigate = useNavigate()
    const [userProfiles, setUserProfiles] = useState([])

    useEffect(()=>{
        getMyProfiles().then(profiles => setUserProfiles(profiles))
    }, [])

    const clickNewProfile = (e) => {
        e.preventDefault()
        navigate("/newprofile")
    }

    const clickEditProfile = (e) => {
        e.preventDefault()
        navigate(`/editprofile/${e.target.id}`)
    }

    const clickDeleteProfile = (e) => {
        e.preventDefault()
        deleteProfile(e.target.id)
    }


    return <><br></br><br></br><button onClick={(e)=> clickNewProfile(e)}>Create new profile</button>

        {
            userProfiles
            ? userProfiles.map(prof => {
                return <><p>{prof.name}</p>
                <button id={prof.id} onClick={(e)=> clickEditProfile(e)}>edit</button>
                <button id={prof.id} onClick={(e)=> clickDeleteProfile(e)}>delete</button></>
            })
            :<></>
        }
    </> 
}
