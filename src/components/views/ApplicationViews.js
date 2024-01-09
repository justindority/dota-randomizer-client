import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login.js"
import { Register } from "../auth/Register.js"
import { Randomizer } from "../randomizer/Randomizer.js"
import { NewProfile } from "../randomprofiles/newprofile.js"
import { Profiles } from "../randomprofiles/profiles.js"

export const AdminViews = () => {
	return <>
	        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
			<Route path="/randomizer" element={<Randomizer />} />
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/newProfile" element={<NewProfile />} />

        </Routes>
	</>
}

