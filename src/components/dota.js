import { Route, Routes } from "react-router-dom"
import { Authorized } from "./views/Authorized.js"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login.js"
import { Register } from "./auth/Register"
import { useEffect,useState } from "react"
import { Randomizer } from "./randomizer/Randomizer.js"
import { getMe } from "../managers/authManager.js"
import { Profiles } from "./randomprofiles/profiles.js"
import { NewProfile } from "./randomprofiles/newprofile.js"



export const Dota = () => {

	const [me, setMe] = useState()
	const [doneLoading, setDoneLoading] = useState(false)

	useEffect(()=>{
		setDoneLoading(false)
        setMe(null)
		getMe().then(res => setMe(res))
	},[])

    useEffect(()=>{
        if(me){
            setDoneLoading(true)
        }
    },[me])

	return <>
	<Routes>
        <Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
        <Route path="*" element={
			<Authorized>
				<>
					<NavBar me={me}/>
					<Routes>
                    <Route path="/random" element={<Randomizer/>} />
					<Route path="/profiles" element={<Profiles/>} />
					<Route path="/newProfile" element={<NewProfile/>} />
					</Routes>
				</>
			</Authorized>

		} />
    </Routes>
	</>
}
