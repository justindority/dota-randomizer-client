import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login.js"
import { Register } from "../auth/Register.js"
import { Employees } from "../employees/employee.js"
import { ItemManager } from "../items/item_manager.js"
import { Reports } from "../reports/reports.js"
import { Tabs } from "../tabs/tabs.js"
import { Profiles } from "../components/randomprofiles/profiles.js"
import { NewProfile } from "../components/randomprofiles/newprofile.js"

export const ApplicationViews = () => {
	return <>
	        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
			<Route path="/randomizer" element={<Tabs />} />
            <Route path="/profiles" element={<Profiles key={'Profiles'}/>} />
            <Route path="/newprofile" element={<NewProfile key={'NewProfile'}/>} />
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
