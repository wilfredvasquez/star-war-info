import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    en: {
        all_about_star_war: "All about Star War",
        people: "People",
        planets: "Planets",
        films: "Films",
        species: "Species",
        starships: "Starships",
        vehicles: "Vehicles",
        gender: "Gender",
        gender_type: "Male" | "Female" | "N/A",
        birth_year: "Birth Year",
        view_detail: "View detail",
        previuos: "Previous",
        next: "Next"
    },
    es: {
        all_about_star_war: "Todo acerca Star War",
        people: "Personajes",
        planets: "Planetas",
        films: "Películas",
        species: "Especies",
        starships: "Naves",
        vehicles: "Vehículos",
        gender: "Género",
        gender_type: "Masculino" | "Femenino" | "N/A",
        birth_year: "Nacimiento",
        view_detail: "Ver detalle",
        previuos: "Anterior",
        next: "Siguiente"
    }
}

const i18n = new VueI18n({
    messages,
    locale: 'en'
})

export default i18n