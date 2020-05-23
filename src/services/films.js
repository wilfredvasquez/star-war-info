// Axios para hacer la llamada HTTP
import { get } from 'axios'
// Configuración
import configService from "@/services/config"

function getAllFilms (page) {
    if(!page){ page = 1 }
    const API_URL = `${configService.apiUrlBase}${configService.endpointFilms}/?page=${page}`
    return get(API_URL)
}

function getFilmsById (id) {
    const API_URL = `${configService.apiUrlBase}${configService.endpointFilms}/${id}/`
    return get(API_URL)
}

export { 
    getAllFilms,
    getFilmsById
}