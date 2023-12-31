import { Router } from "../utils/router"

const params = Router.getParamsFromRoute<{ id:string }>('/things/[id]')

const fetchThing = async () => {
    const response = await fetch(`/api/v1/things/${params?.id}`)
    const responseJson = await response.json()

    console.log(responseJson)
}

fetchThing()