export const getMyProfiles = () => {
    return fetch("http://localhost:8000/profile?mine", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}

export const createProfile = (profile) => {
    return fetch("http://localhost:8000/profile", {
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
    return fetch("http://localhost:8000/profile", {
        method: "PUT",
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profile)
    })
        .then(response => response.json())
}

export const deleteProfile = (profileId) => {
    return fetch("http://localhost:8000/profile", {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(profileId)
    })

}