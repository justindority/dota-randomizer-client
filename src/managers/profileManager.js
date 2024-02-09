export const getMyProfiles = () => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/profile?mine", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const createProfile = (profile) => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/profile", {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
    })
        .then(response => response.json())
}

export const editProfile = (profile) => {
    return fetch(`https://dota-randomizer-server-8bms4.ondigitalocean.app/profile/${profile.profileId}`, {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
    })
        
}

export const deleteProfile = (profileId) => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/profile", {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profileId)
    })

}