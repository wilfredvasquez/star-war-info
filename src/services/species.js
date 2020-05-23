// Axios para hacer la llamada HTTP
import { get } from 'axios'
// Configuración
import configService from "@/services/config"

function getAllSpecies (page) {
    if(!page){ page = 1 }
    const API_URL = `${configService.apiUrlBase}${configService.endpointSpecies}/?page=${page}`
    return get(API_URL)
}

function getSpeciesById (id) {
    const API_URL = `${configService.apiUrlBase}${configService.endpointSpecies}/${id}/`
    return get(API_URL)
}

export { 
    getAllSpecies,
    getSpeciesById
}