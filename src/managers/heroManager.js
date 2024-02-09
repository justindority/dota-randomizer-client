export const getHeroes = () => {
    return fetch("https://dota-randomizer-server-8bms4.ondigitalocean.app/heroes", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("dota_token")}`
        }
    })
        .then(response => response.json())
}