export const getHeroes = () => {
    return fetch("http://localhost:8000/heroes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}