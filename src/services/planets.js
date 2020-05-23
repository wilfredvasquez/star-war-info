// Axios para hacer la llamada HTTP
import { get } from 'axios'
// Configuración
import configService from "@/services/config"

function getAllPlanets (page) {
    if(!page){ page = 1 }
    const API_URL = `${configService.apiUrlBase}${configService.endpointPlanets}/?page=${page}`
    return get(API_URL)
}

function getPlanetById (id) {
    const API_URL = `${configService.apiUrlBase}${configService.endpointPlanets}/${id}/`
    return get(API_URL)
}

export { 
    getAllPlanets,
    getPlanetById
}