export const getProfiles = (userId) => {

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

}