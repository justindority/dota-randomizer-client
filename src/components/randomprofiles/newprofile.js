import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router"
import { getHeroes } from "../../managers/heroManager"
import { createProfile } from "../../managers/profileManager"


export const NewProfile = () => {

    const navigate = useNavigate()
    const [heroes, setHeroes] = useState([])
    const [profileState, setProfileState] = useState({
        1:true,
        2:true,
        3:true,
        4:true,
        5:true,
        6:true,
        7:true,
        8:true,
        9:true,
        10:true,
        11:true,
        12:true,
        13:true,
        14:true,
        15:true,
        16:true,
        17:true,
        18:true,
        19:true,
        20:true,
        21:true,
        22:true,
        23:true,
        24:true,
        25:true,
        26:true,
        27:true,
        28:true,
        29:true,
        30:true,
        31:true,
        32:true,
        33:true,
        34:true,
        35:true,
        36:true,
        37:true,
        38:true,
        39:true,
        40:true,
        41:true,
        42:true,
        43:true,
        44:true,
        45:true,
        46:true,
        47:true,
        48:true,
        49:true,
        50:true,
        51:true,
        52:true,
        53:true,
        54:true,
        55:true,
        56:true,
        57:true,
        58:true,
        59:true,
        60:true,
        61:true,
        62:true,
        63:true,
        64:true,
        65:true,
        66:true,
        67:true,
        68:true,
        69:true,
        70:true,
        71:true,
        72:true,
        73:true,
        74:true,
        75:true,
        76:true,
        77:true,
        78:true,
        79:true,
        80:true,
        81:true,
        82:true,
        83:true,
        84:true,
        85:true,
        86:true,
        87:true,
        88:true,
        89:true,
        90:true,
        91:true,
        92:true,
        93:true,
        94:true,
        95:true,
        96:true,
        97:true,
        98:true,
        99:true,
        100:true,
        101:true,
        102:true,
        103:true,
        104:true,
        105:true,
        106:true,
        107:true,
        108:true,
        109:true,
        110:true,
        111:true,
        112:true,
        113:true,
        114:true,
        115:true,
        116:true,
        117:true,
        118:true,
        119:true,
        120:true,
        121:true,
        122:true,
        123:true,
        124:true,
        "title": ""
        }
    )
    const [deselector, setDeselector] = useState([1])

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

    const saveNewProfile = () => {
        let copy = {...profileState}
        createProfile(copy)
        navigate('/profiles')
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


    return(
        <><br></br><br></br>
        <button onClick={()=>{selectAll()}}>Select All</button>
        <button onClick={()=>{deselectAll()}}>Deselect All</button>
        <br></br><br></br>
        <label for="title">Title</label> &nbsp;
        <input value={profileState["title"]} onChange={(e)=>changeTitleHandler(e)} id="title"></input>
        <br></br><br></br>
        {
            heroes.str
            ? heroes.str.map(hero => {
                return <>
                { 
                    profileState[hero.id]
                    ? <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.name}>{hero?.name}</label><img src={hero?.portraiturl}/><br></br></>
                    : <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.name}>{hero?.name}</label><br></br></>

                }</>
                
            })
            : <></>
        }
        <br></br>
        {
            heroes.agi
            ? heroes.agi.map(hero => {
                return <>
                { 
                    profileState[hero.id]
                    ? <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.name}>{hero?.name}</label><img src={hero?.portraiturl}/><br></br></>
                    : <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.name}>{hero?.name}</label><br></br></>

                }</>
                
            })
            : <></>
        }
        <br></br>
        {
            heroes.uni
            ? heroes.uni.map(hero => {
                return <>
                { 
                    profileState[hero.id]
                    ? <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.name}>{hero?.name}</label><img src={hero?.portraiturl}/><br></br></>
                    : <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.name}>{hero?.name}</label><br></br></>

                }</>
                
            })
            : <></>
        }
        <br></br>
        {
            heroes.int
            ? heroes.int.map(hero => {
                return <>
                { 
                    profileState[hero.id]
                    ? <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='checked'/><label for={hero?.name}>{hero?.name}</label><img src={hero?.portraiturl}/><br></br></>
                    : <><div></div><input type="checkbox" id={hero?.id} onClick={(e)=>changeCheckedHandler(e)} checked='' /><label for={hero?.name}>{hero?.name}</label><br></br></>

                }</>
                
            })
            : <></>
        }

        <button onClick={()=>saveNewProfile()}>Save</button>
        </>
    )

    
    
}

