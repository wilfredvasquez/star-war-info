import Home from '@/components/views/people/Index.vue'
import PeopleDetail from '@/components/views/people/PeopleDetail.vue'

import Planets from '@/components/views/planets/Index.vue'
import PlanetDetail from '@/components/views/planets/PlanetDetail.vue'

import Films from '@/components/views/films/Index.vue'
import FilmDetail from '@/components/views/films/FilmDetail.vue'

import Species from '@/components/views/species/Index.vue'
import SpecieDetail from '@/components/views/species/SpecieDetail.vue'

import Starships from '@/components/views/starships/Index.vue'
import StarshipDetail from '@/components/views/starships/StarshipDetail.vue'

import Vehicles from '@/components/views/vehicles/Index.vue'
import VehicleDetail from '@/components/views/vehicles/VehicleDetail.vue'

const routes = [
  { path: '/', component: Home, name: 'home', meta: { is_people: true } },
  { path: '/people/:id', component: PeopleDetail, name: 'people_detail',  meta: { is_people: true } },

  { path: '/planets', component: Planets, name: 'planets', meta: { is_planets: true } },
  { path: '/planets/:id', component: PlanetDetail, name: 'planet_detail',  meta: { is_planets: true } },

  { path: '/films', component: Films, name: 'films', meta: { is_films: true } },
  { path: '/films/:id', component: FilmDetail, name: 'film_detail',  meta: { is_films: true } },

  { path: '/species', component: Species, name: 'species', meta: { is_species: true } },
  { path: '/species/:id', component: SpecieDetail, name: 'specie_detail',  meta: { is_species: true } },

  { path: '/starships', component: Starships, name: 'starships', meta: { is_starships: true } },
  { path: '/starships/:id', component: StarshipDetail, name: 'starship_detail',  meta: { is_starships: true } },

  { path: '/vehicles', component: Vehicles, name: 'vehicles', meta: { is_vehicles: true } },
  { path: '/vehicles/:id', component: VehicleDetail, name: 'vehicle_detail',  meta: { is_vehicles: true } },
]

export default routes