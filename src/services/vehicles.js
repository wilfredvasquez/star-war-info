// Axios para hacer la llamada HTTP
import { get } from 'axios'
// Configuración
import configService from "@/services/config"

function getAllVehicles (page) {
    if(!page){ page = 1 }
    const API_URL = `${configService.apiUrlBase}${configService.endpointVehicles}/?page=${page}`
    return get(API_URL)
}

function getVehiclesById (id) {
    const API_URL = `${configService.apiUrlBase}${configService.endpointVehicles}/${id}/`
    return get(API_URL)
}

export { 
    getAllVehicles,
    getVehiclesById
}