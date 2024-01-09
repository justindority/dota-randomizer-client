export const getMe = () => {
    let token = ""
    if(localStorage.getItem("dota_token")){
        return fetch(`http://localhost:8000/getMe`,{
            headers: {
                "Authorization": `Token ${localStorage.getItem("dota_token")}`
            }
        })
        .then(response => response.json())
    } else {
        return fetch(`http://localhost:8000/getMe`)
        .then(response => response.json())
    }

}