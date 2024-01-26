import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login.js"
import { Register } from "../auth/Register.js"
import { Reports } from "../reports/reports.js"
import { Profiles } from "../components/randomprofiles/profiles.js"
import { NewProfile } from "../components/randomprofiles/newprofile.js"
import { EditProfile } from "../components/randomprofiles/editprofile.js"
import { Randomizer } from "../components/randomizer/Randomizer.js"

export const ApplicationViews = () => {
	return <>
	        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
			<Route path="/randomizer" element={<Randomizer />} />
            <Route path="/profiles" element={<Profiles key={'Profiles'}/>} />
            <Route path="/newprofile" element={<NewProfile />} />
            <Route path="/editprofile/:profileId" element={ <EditProfile/> } />
            <Route path="/reports" element={<Reports />} /> 


            {/* <Route element={<Authorized />}>
                <Route path="/" element={<GameList />} /> */}
                {/* <Route path="/events" element={<EventList />} />
                <Route path="/games/new" element={<GameForm />} />
                <Route path="/events/new" element={<EventForm />} />
                <Route path="/games/:gameId" element={<UpdateGameForm />} />
                <Route path="/events/:eventId" element={<UpdateEventForm />} /> */}

            {/* </Route> */}
        </Routes>
	</>
}
