<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-if="!isLoading && !showNotification")
        .container.results
            .card
                header.card-header
                    p.card-header-title.title {{ planet.name }}
                
                .card-content
                    .content
                        div
                            p.title.is-4 {{ $t('basic_information') }}
                            
                            .columns.is-desktop
                                .column.is-3
                                    p.has-text-weight-bold {{ $t('climate') }} / {{ $t('terrain') }}
                                    p {{ planet.climate | capitalize }} / {{ planet.terrain | capitalize }}
                                .column.is-3
                                    p.has-text-weight-bold {{ $t('diameter') }} / {{ $t('gravity') }}
                                    p {{ planet.diameter }} / {{ planet.gravity }} 
                                .column.is-3
                                    p.has-text-weight-bold {{ $t('orbital') }} / {{ $t('rotation') }} ({{ $t('period') }}) 
                                    p {{ planet.orbital_period }} / {{ planet.rotation_period }} 
                                .column.is-3
                                    p.has-text-weight-bold {{ $t('population') }}
                                    p {{ planet.population}}

                        div(v-if="!planet.residents.length == 0")
                            br
                            p.title.is-4 {{ $t('residents') }}
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(r, index) in planet.residents")
                                    residents(:resident_url="r")

                        div(v-if="!planet.films.length == 0")
                            br
                            div
                              p.title.is-4 {{ $t('films') }}
                              .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(f, index) in planet.films")
                                    p.title.is-4 {{ f }}

                footer.card-footer
                    router-link.card-footer-item(:to="{ name: 'planets' }") {{ $t('return') }}
</template>

<script>
import { getPlanetById } from '@/services/planets'
import Residents from '@/components/shared/Residents'
import Films from '@/components/shared/Films'
import Loader from '@/components/shared/Loading.vue'
import Notification from '@/components/shared/Notification.vue'

export default {
  components: {
    Loader,
    Notification,
    Films,
    Residents
  },
  data () {
    return {
      isLoading: false,
      showNotification: false,
      planet: null,
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    getPlanetById(id)
      .then( res => {
        console.log(res.data)
        this.planet = res.data
      })
      .catch(() => {
        this.planet = null
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