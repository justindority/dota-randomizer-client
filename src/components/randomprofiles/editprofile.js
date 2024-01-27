import { useEffect, useState } from "react"
import { getHeroes } from "../../managers/heroManager"
import { createProfile, getMyProfiles } from "../../managers/profileManager"
import { useParams, useNavigate } from "react-router"

export const EditProfile = () => {

    const { profileId } = useParams()
    const [heroes, setHeroes] = useState([])
    const [profiles, setProfiles] = useState([])
    const [profile, setProfile] = useState([])
    const [profileState, setProfileState] = useState({})

    useEffect(()=>{
        getMyProfiles().then(prof => setProfiles(prof))
    },[])

    useEffect(()=>{
        if(profiles){
                for (const pro of profiles) {
                    if(pro.id === parseInt(profileId)){
                        setProfile(pro)
                    }
                }
            }
    },[profiles])

    useEffect(()=>{
        if(profile && heroes){
            let tempState = {}
            for (const hero of heroes) {
                for (const ban of profile.banned) {
                    if(hero.id === ban.id){
                        tempState[hero.id] = false
                        break
                    }else{
                        tempState[hero.id] = true
                    }
                }
            }
            setProfileState(tempState)
        }
    },[profile])


    useEffect(()=>{
        getHeroes().then(heroes => setHeroes(heroes))
    }, [])

    const changeCheckedHandler = (e) => {
        let copy = {...profileState}
        let id = e.target.id
        if (copy[id]){
            copy[id] = false
        } else {
            copy[id] = true
        }
        setProfileState(copy)
    }

    const changeTitleHandler = (e) => {
        let copy = {...profileState}
        copy["title"] = e.target.value
        setProfileState(copy)
     }

    const saveNewProfile = () => {
        let copy = {...profileState}
        createProfile(copy)
    }


    return(
        <>
        {
            heroes
            ? heroes.map(hero => {
                return <>
                { 
                    profileState[hero.id]
                    ? <><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} value={hero?.name} checked/><label for={hero?.name}>{hero?.name}</label><br></br></>
                    : <><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} value={hero?.name}/><label for={hero?.name}>{hero?.name}</label><br></br></>
                }</>
                
            })
            : <></>
        }
        <label for="title">Title</label>
        <textarea value={profileState["title"]} onChange={(e)=>changeTitleHandler(e)} id="title"></textarea>
        <button onClick={()=>saveNewProfile()}>Save</button>
        </>
    )

    
    
}

