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
        return fetch("http://localhost:8000/register", {
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
                <h1 className="h3 mb-3 font-weight-normal">register for dotarandomizer</h1>

                <fieldset>
                    <label htmlFor="email" className=""> Username </label>
                    <input onChange={updateUser}
                        type="text" id="username" className="form-control"
                        placeholder="Username" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="password"> Password </label>
                    <input onChange={updateUser}
                        type="password" id="password" className="form-control"
                        placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <button type="submit"> Register </button>
                </fieldset>
            </form>
        </main>
    )
}

