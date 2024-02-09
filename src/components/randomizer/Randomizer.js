import { useEffect,useState } from "react"
import { getMyProfiles } from "../../managers/profileManager"
import './randomizer.css'
import { trueRandom, strRandom, agiRandom, intRandom, uniRandom, profileRandom } from "../../managers/randomManager"

//use this as main page to select a random from default or created profiles
//gets user's profiles from api and displays here, allowing user to select one for a random hero

export const Randomizer = () => {

    const [userProfiles, setUserProfiles] = useState([])
    const [randomResult, setRandomResult] = useState({})

    useEffect(()=>{
        getMyProfiles().then(profiles => setUserProfiles(profiles))
    }, [])

    const trueRandomFunc = () => {
        trueRandom().then(res => setRandomResult(res))
    }

    const strRandomFunc = () => {
        strRandom().then(res => setRandomResult(res))
    }

    const agiRandomFunc = () => {
        agiRandom().then(res => setRandomResult(res))
    }

    const intRandomFunc = () => {
        intRandom().then(res => setRandomResult(res))
    }

    const uniRandomFunc = () => {
        uniRandom().then(res => setRandomResult(res))
    }

    const profRandomFunc = (e) => {
        profileRandom(e.target.id).then(res => setRandomResult(res))
    }

    const randomAlert = (res) => {
        window.alert('you randomed ' + res.name +'!')
    }

    return(
        <>
            <div class="profiles-and-result">
                <div class="profiles-to-random">
                    <div class='custom-profiles-list'>
                    {
                        userProfiles[0]
                        ? <h2 className="profile-category">Custom Profiles</h2>
                        : <></>
                    }
                    {
                        userProfiles[0]
                        ? userProfiles.map(prof => {
                            return <><button onClick={(e)=>profRandomFunc(e)} id={prof.id} class='button-other'>{prof.name}</button></>
                        })
                        : <></>
                    }
                    </div>
                    <br></br>
                    <h2 className="profile-category">Default Profiles</h2>
                    {
                        <div class='default-profiles-list'>
                            <button className="button-other" onClick={()=>trueRandomFunc()}>True Random</button>
                            <button className="button-str" onClick={()=>strRandomFunc()}>Random Strength</button>
                            <button className="button-agi" onClick={()=>agiRandomFunc()}>Random Agility</button>
                            <button className="button-int" onClick={()=>intRandomFunc()}>Random Intelligence</button>
                            <button className="button-uni" onClick={()=>uniRandomFunc()}>Random Universal</button>
                        </div>
                    }
                </div>
                <div className="random-result">
                    {
                        randomResult.name
                        ? <><h2 className='result-text'>You randomed:</h2><br></br><img className="result-pic" src={randomResult.portraiturl}></img><h2 className="result-text">{randomResult.name}</h2></>
                        : <></>
                    }
                </div>
            </div>
        </>
    )
}