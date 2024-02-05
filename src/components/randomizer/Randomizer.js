import { useEffect,useState } from "react"
import { getMyProfiles } from "../../managers/profileManager"
import './randomizer.css'
import { trueRandom, strRandom, agiRandom, intRandom, uniRandom, profileRandom } from "../../managers/randomManager"

//use this as main page to select a random from default or created profiles
//gets user's profiles from api and displays here, allowing user to select one for a random hero

export const Randomizer = () => {

    const [userProfiles, setUserProfiles] = useState([])

    useEffect(()=>{
        getMyProfiles().then(profiles => setUserProfiles(profiles))
    }, [])

    const trueRandomFunc = () => {
        trueRandom().then(res => randomAlert(res))
    }

    const strRandomFunc = () => {
        strRandom().then(res => randomAlert(res))
    }

    const agiRandomFunc = () => {
        agiRandom().then(res => randomAlert(res))
    }

    const intRandomFunc = () => {
        intRandom().then(res => randomAlert(res))
    }

    const uniRandomFunc = () => {
        uniRandom().then(res => randomAlert(res))
    }

    const profRandomFunc = (e) => {
        profileRandom(e.target.id).then(res => randomAlert(res))
    }

    const randomAlert = (res) => {
        window.alert('you randomed ' + res.name +'!')
    }

    return(
        <><div class="profiles-to-random">
        {
            userProfiles
            ? userProfiles.map(prof => {
                return <><button onClick={(e)=>profRandomFunc(e)} id={prof.id} class='profile-to-random'>{prof.name}</button></>
            })
            : <></>
        }
        {<>
            <button onClick={()=>trueRandomFunc()}>True Random</button>
            <button onClick={()=>strRandomFunc()}>Random Strength</button>
            <button onClick={()=>agiRandomFunc()}>Random Agility</button>
            <button onClick={()=>intRandomFunc()}>Random Intelligence</button>
            <button onClick={()=>uniRandomFunc()}>Random Universal</button>
            </>
        }
        </div></>
    )
}
