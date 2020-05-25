<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-if="!isLoading && !showNotification")
        .container.results
            .card
                header.card-header
                    p.card-header-title.title {{ starship.name }}
                
                .card-content
                    .content
                        div
                            p.title.is-4 {{ $t('basic_information') }}
                            
                            .columns.is-desktop
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('manufacturer') }}
                                    p {{ starship.manufacturer }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('capacity') }} / {{ $t('passengers') }}
                                    p {{ starship.cargo_capacity }} Km / {{ starship.passengers }}
                                .column.is-2
                                    p.has-text-weight-bold {{ $t('consumables') }}
                                    p {{ starship.consumables }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('costs') }}
                                    p {{ starship.cost_in_credits }} {{ $t('credits') }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('crew') }}
                                    p {{ starship.crew }}
                                .column.is-2
                                    p.has-text-weight-bold {{ $t('hyperdrive') }}
                                    p {{ starship.hyperdrive_rating }}

                        div(v-if="!starship.pilots.length == 0")
                            br
                            p.title.is-4 {{ $t('pilots') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(p, index) in starship.pilots")
                                    residents(:resident_url="p")

                        div(v-if="!starship.films.length == 0")
                            br
                            p.title.is-4 {{ $t('films') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(f, index) in starship.films")
                                    films(:film_url="f")
                             
                footer.card-footer
                    router-link.card-footer-item(:to="{ name: 'starships' }") {{ $t('return') }}
</template>

<script>
import { getStarshipsById } from '@/services/starships'
import Films from '@/components/shared/Films'
import Residents from "@/components/shared/Residents"
import Loader from '@/components/shared/Loading.vue'
import Notification from '@/components/shared/Notification.vue'

export default {
  components: {
    Loader,
    Notification,
    Residents,
    Films
  },
  data () {
    return {
      isLoading: false,
      showNotification: false,
      starship: null,
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    getStarshipsById(id)
      .then( res => {
        console.log(res.data)
        this.starship = res.data
      })
      .catch(() => {
        this.starship = null
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