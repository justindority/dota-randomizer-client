export const trueRandom = () => {
    return fetch("http://localhost:8000/random?true", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const strRandom = () => {
    return fetch("http://localhost:8000/random?str", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const agiRandom = () => {
    return fetch("http://localhost:8000/random?agi", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const intRandom = () => {
    return fetch("http://localhost:8000/random?int", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const uniRandom = () => {
    return fetch("http://localhost:8000/random?uni", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}