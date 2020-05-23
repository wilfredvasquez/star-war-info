// Axios para hacer la llamada HTTP
import { get } from 'axios'
// Configuración
import configService from "@/services/config"

function getAllStarships (page) {
    if(!page){ page = 1 }
    const API_URL = `${configService.apiUrlBase}${configService.endpointStarships}/?page=${page}`
    return get(API_URL)
}

function getStarshipsById (id) {
    const API_URL = `${configService.apiUrlBase}${configService.endpointStarships}/${id}/`
    return get(API_URL)
}

export { 
    getAllStarships,
    getStarshipsById
}