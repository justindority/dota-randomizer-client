import { useEffect, useState } from "react"
import { getHeroes } from "../../managers/heroManager"
import { createProfile, editProfile, getMyProfiles } from "../../managers/profileManager"
import { useParams, useNavigate, Navigate } from "react-router"

export const EditProfile = () => {

    const { profileId } = useParams()
    const [heroes, setHeroes] = useState([])
    const [profiles, setProfiles] = useState([])
    const [profile, setProfile] = useState([])
    const [profileState, setProfileState] = useState({})
    const navigate = useNavigate()

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
        if(profile.banned && heroes){
            let tempState = {}
            let allHeroes = []
            for (const strHero of heroes.str) {
                allHeroes.push(strHero)
            }
            for (const agiHero of heroes.agi) {
                allHeroes.push(agiHero)
            }
            for (const intHero of heroes.int) {
                allHeroes.push(intHero)
            }
            for (const uniHero of heroes.uni) {
                allHeroes.push(uniHero)
            }
            for (const hero of allHeroes) {
                for (const ban of profile.banned) {
                    if(hero.id === ban.id){
                        tempState[hero.id] = false
                        break
                    }else{
                        tempState[hero.id] = true
                    }
                }
            }
            tempState.title = profile.name
            tempState.profileId = profile.id
            setProfileState(tempState)
        }
    },[profile])


    useEffect(()=>{
        getHeroes().then(heroes => {
            let agi = []
            let str = []
            let uni = []
            let int = []
            for (const hero of heroes) {
                if(hero.attribute === 'agi'){
                    agi.push(hero)
                }else if(hero.attribute === 'str'){
                    str.push(hero)
                }else if(hero.attribute === 'uni'){
                    uni.push(hero)
                }else if(hero.attribute === 'int'){
                    int.push(hero)
                }
            }
            setHeroes({agi, str, uni, int})})
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

     const selectAll = () => {
        let copy = {...profileState}
        let count = 1
        while(count < 144){
            copy[count] = true
            count += 1
        }
        setProfileState(copy)
    }

    const deselectAll = () => {
        let copy = {...profileState}
        let count = 1
        while(count < 144){
            copy[count] = false
            count += 1
        }
        setProfileState(copy)

    }

    const editCurrentProfile = () => {
        let copy = {...profileState}
        editProfile(copy)
        navigate('../random')
    }


    return(
        <>

        <div className="hero-grid">
        <div className="title-and-select">
            <div className="title-and-save">
                <label className="title-label" for="title">Change Title</label> &nbsp;
                <input value={profileState["title"]} onChange={(e)=>changeTitleHandler(e)} id="title"></input>&nbsp;&nbsp;
                <button className="button-agi" onClick={()=>editCurrentProfile()}> Save </button>
            </div>
            <div><h2 className="editing-profile-title">Editing Profile "{profile['name']}"</h2></div>

            <div className="select-deselect">
                <button className="button-other" onClick={()=>{selectAll()}}>Select All</button>
                <button className="button-other" onClick={()=>{deselectAll()}}>Deselect All</button>
            </div>
        </div>
            <div className="str-agi">
                <div className="str">
                    <div className="icon-title">
                        <img className="attribute-icon" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Strength_attribute_symbol.png"></img>
                        <div className="attribute-title"><h2 className="attribute-title">strength</h2></div>
                    </div>
                
                    <div className="attribute-heroes">
                    {
                        heroes.str
                        ? heroes.str.map(hero => {
                            return <div className="single-hero">
                            { 
                                profileState[hero.id]
                                ? <><div></div><input type="checkbox" hidden id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.id}><img className="active-hero" src={hero?.portraiturl}/></label></>
                                : <><div></div><input type="checkbox" hidden id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.id}><img className="inactive-hero" src={hero?.portraiturl} /></label></>

                            }</div>
                            
                        })
                        : <></>
                    }</div>
                </div>
                <br></br>
                <div className="str">
                    <div className="icon-title">
                        <img className="attribute-icon" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2d/Agility_attribute_symbol.png"></img>
                        <div className="attribute-title"><h2 className="attribute-title">agility</h2></div>
                    </div>
                    <div className="attribute-heroes">
                    {
                        heroes.agi
                        ? heroes.agi.map(hero => {
                            return <div className="single-hero">
                            { 
                                profileState[hero.id]
                                ? <><div></div><input hidden type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.id}><img className="active-hero" src={hero?.portraiturl}/></label></>
                                : <><div></div><input hidden type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.id}><img className="inactive-hero" src={hero?.portraiturl} /></label></>

                            }</div>
                            
                        })
                        : <></>
                    }</div>
                </div>
            </div>
            <br></br>
            <div className="int-uni">
            <div className="str">
                    <div className="icon-title">
                        <img className="attribute-icon" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Intelligence_attribute_symbol.png"></img>
                        <div className="attribute-title"><h2 className="attribute-title">intelligence</h2></div>
                    </div>
                <div className="attribute-heroes">
                {
                    heroes.int
                    ? heroes.int.map(hero => {
                        return <div className="single-hero">
                        { 
                            profileState[hero.id]
                            ? <><div></div><input hidden type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.id}><img className="active-hero" src={hero?.portraiturl} /></label><br></br></>
                            : <><div></div><input hidden type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.id}><img className="inactive-hero" src={hero?.portraiturl} /></label><br></br></>

                        }</div>
                        
                    })
                    : <></>
                }</div>
                </div>
                <br></br>
                <div className="str">
                    <div className="icon-title">
                        <img className="attribute-icon" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/1/1c/Universal_attribute_symbol.png"></img>
                        <div className="attribute-title"><h2 className="attribute-title">universal</h2></div>
                    </div>
                <div className="attribute-heroes">
                {
                    heroes.uni
                    ? heroes.uni.map(hero => {
                        return <div className="single-hero">
                        { 
                            profileState[hero.id]
                            ? <><div></div><input hidden type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.id}><img className="active-hero" src={hero?.portraiturl} /></label><br></br></>
                            : <><div></div><input hidden type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.id}><img className="inactive-hero" src={hero?.portraiturl}  /></label><br></br></>

                        }</div>
                        
                    })
                    : <></>
                }</div>
                </div>
            </div>
        </div>

        </>
    )

    
    
}

