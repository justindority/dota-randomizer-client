export const trueRandom = () => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/random?true", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const strRandom = () => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/random?str", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const agiRandom = () => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/random?agi", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const intRandom = () => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/random?int", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const uniRandom = () => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/random?uni", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const profileRandom = (profileId) => {
    return fetch(`https://dota-randomizer-server-8bms4.ondigitalocean.app/random/${profileId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`,
        }
    })
        .then(response => response.json())
}