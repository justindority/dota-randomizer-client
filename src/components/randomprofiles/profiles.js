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
        deleteProfile(e.target.id).then(()=>navigate("/profiles"))
    }


    return <><button onClick={(e)=> clickNewProfile(e)} className="button-other" >Create new profile</button>
        <div className="profile-list">
        {
            userProfiles[0]
            ? userProfiles.map(prof => {
                return <>
                    <div className="single-profile">
                        <h3 className="profile-list-item">{prof.name}</h3>
                        <button id={prof.id} onClick={(e)=> clickEditProfile(e)} className="button-other" >edit</button>
                        <button id={prof.id} onClick={(e)=> clickDeleteProfile(e)} className="button-str" >delete</button>
                    </div>
                    </>
            })
            :<></>
        }
        </div>
    </> 
}
