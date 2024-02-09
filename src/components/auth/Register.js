import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    let navigate = useNavigate()

    const registerNewUser = (event) => {
        event.preventDefault()
        return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(token => {
                if (token.token) {
                    localStorage.setItem("dota_token",token.token)

                    navigate("/random")
                } else if(token === 'Duplicate Username Found') {
                    window.alert('Duplicate Username Found')
                }})
            
    }


    const updateUser = (evt) => {
        const copy = {...user}
        copy[evt.target.id] = evt.target.value
        setUser(copy)
    }

    return (
        <main style={{ textAlign: "center" }}>
            <form className="form--login" onSubmit={registerNewUser}>
                <h1 className="h3 mb-3 register-title font-weight-normal">register for dotarandomizer</h1><br></br>

                <div>
                    <label htmlFor="email" className="register-title"> Username </label>
                    <input onChange={updateUser}
                        type="text" id="username" className="form-control"
                        placeholder="Username" required />
                </div>
                <div>
                    <label className="register-title" htmlFor="password"> Password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="Password" required />
                </div>
                <div>
                    <button className="button-other" type="submit"> Register </button>
                </div>
            </form>
        </main>
    )
}

