// Axios para hacer la llamada HTTP
import { get } from 'axios'
// Configuración
import configService from "@/services/config"

function getAllPeople (page) {
    if(!page){ page = 1 }
    const API_URL = `${configService.apiUrlBase}${configService.endpointPeople}/?page=${page}`
    return get(API_URL)
}

function getPeopleById (id) {
    const API_URL = `${configService.apiUrlBase}${configService.endpointPeople}/${id}/`
    return get(API_URL)
}

export { 
    getAllPeople,
    getPeopleById
}