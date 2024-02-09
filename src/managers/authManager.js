export const getMe = () => {
    let token = ""
    if(localStorage.getItem("dota_token")){
        return fetch(`https://dota-randomizer-server-8bms4.ondigitalocean.app/getMe`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("dota_token")}`
            }
        })
        .then(response => response.json())
    } else {
        return fetch(`https://dota-randomizer-server-8bms4.ondigitalocean.app/getMe`)
        .then(response => response.json())
    }

}