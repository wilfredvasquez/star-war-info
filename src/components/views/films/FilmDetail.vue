<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-if="!isLoading && !showNotification")
        .container.results
            .card
                header.card-header
                    p.card-header-title.title {{ film.title }} {{ $t('episode') }}: {{ film.episode_id }}
                
                .card-content
                    .content
                        div
                            p.title.is-4 {{ $t('basic_information') }}
                            
                            .columns.is-desktop
                                .column.is-4 
                                    p.has-text-weight-bold {{ $t('director') }}
                                    p {{ film.director }}
                                .column.is-4 
                                    p.has-text-weight-bold {{ $t('producer') }}
                                    p {{ film.producer }}
                                .column.is-4
                                    p.has-text-weight-bold {{ $t('release_date') }}
                                    p {{ film.release_date }}

                            .columns.is-desktop
                                .column.is-12
                                    p.has-text-weight-bold {{ $t('description') }}
                                    p {{ film.opening_crawl }}

                        div(v-if="!film.characters.length == 0")
                            br
                            p.title.is-4 {{ $t('people') }}
                              
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(p, index) in film.characters")
                                    residents(:resident_url="p")
                        
                        div(v-if="film.planets.length == 0")
                            br
                            p.title.is-4 {{ $t('planets') }}
                              
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(p, index) in film.planets")
                                    planets(:specie_url="p")

                        div(v-if="!film.species.length == 0")
                            br
                            p.title.is-4 {{ $t('species') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(s, index) in film.species")
                                    species(:specie_url="s")
                        
                        div(v-if="!film.vehicles.length == 0")
                            br
                            p.title.is-4 {{ $t('vehicles') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(v, index) in film.vehicles")
                                    vehicles(:vehicle_url="v")
                        
                        div(v-if="!film.starships.length == 0")
                            br
                            p.title.is-4 {{ $t('starships') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(s, index) in film.starships")
                                    starships(:starship_url="s")
                        
                        
                
                footer.card-footer
                    router-link.card-footer-item(:to="{ name: 'films' }") {{ $t('return') }}
</template>

<script>
import { getFilmsById } from '@/services/films'
import Species from "@/components/shared/Species"
import Residents from "@/components/shared/Residents"
import Planets from "@/components/shared/Planets"
import Starships from '@/components/shared/Starships'
import Vehicles from '@/components/shared/Vehicles'
import Loader from '@/components/shared/Loading.vue'
import Notification from '@/components/shared/Notification.vue'

export default {
  components: {
    Loader,
    Notification,
    Starships,
    Vehicles,
    Species,
    Planets,
    Residents
  },
  data () {
    return {
      isLoading: false,
      showNotification: false,
      film: null,
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    getFilmsById(id)
      .then( res => {
        this.film = res.data
      })
      .catch(() => {
        this.film = null
        this.showNotification = true
      })
      .finally(() => {
        this.isLoading = false
      })
  },
}
</script>

<style lang="scss" scoped>
.lds-hourglass {
  margin-bottom: 10em;
  margin-top: 10em;
}
</style>