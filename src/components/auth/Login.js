import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"


export const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPass] = useState("")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        let body = {
            username: username,
            password: password
        }
        return fetch('https://dota-randomizer-server-8bms4.ondigitalocean.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(token => {
                if (token.token) {
                    localStorage.setItem("dota_token",token.token)

                    navigate("/random")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container-login">
            <section className="login-section">

                 
                    <p>username</p>
                        <input type="text"
                            value={username}
                            onChange={evt => setUsername(evt.target.value)}
                            className="input-username"
                            placeholder="username"
                            required autoFocus />
                    
                        <br/>
                        <p>password</p>
                        <input type="password"
                            value={password}
                            onChange={evt => setPass(evt.target.value)}
                            className="form-control"
                            placeholder="password"
                            required autoFocus />
                            
                        
                        <br/>
                        <button className="button-other" color='primary' onClick={handleLogin} type="submit">
                            Sign in
                        </button>
                        
                    

            </section>
            <div className="link-register">
                <Link to="/register">Not a member yet?</Link>
            </div>
        </main>
    )
}
