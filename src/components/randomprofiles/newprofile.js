import { useEffect, useState } from "react"
import { getHeroes } from "../../managers/heroManager"

export const NewProfile = () => {

    const [heroes, setHeroes] = useState([])


    useEffect(()=>{
        getHeroes().then(heroes => setHeroes(heroes))
    })

    return<>
    test
    </>

}