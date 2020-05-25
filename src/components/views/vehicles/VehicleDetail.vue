<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-if="!isLoading && !showNotification")
        .container.results
            .card
                header.card-header
                    p.card-header-title.title {{ vehicle.name }}
                
                .card-content
                    .content
                        div
                            p.title.is-4 {{ $t('basic_information') }}
                            
                            .columns.is-desktop
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('manufacturer') }}
                                    p {{ vehicle.manufacturer }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('capacity') }} / {{ $t('passengers') }}
                                    p {{ vehicle.cargo_capacity }} Km / {{ vehicle.passengers }}
                                .column.is-2
                                    p.has-text-weight-bold {{ $t('consumables') }}
                                    p {{ vehicle.consumables }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('costs') }}
                                    p {{ vehicle.cost_in_credits }} {{ $t('credits') }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('crew') }}
                                    p {{ vehicle.crew }}
                                .column.is-2
                                    p.has-text-weight-bold {{ $t('max_speed') }}
                                    p {{ vehicle.max_atmosphering_speed }}

                        div(v-if="!vehicle.pilots.length == 0")
                            br
                            p.title.is-4 {{ $t('pilots') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(p, index) in vehicle.pilots")
                                    residents(:resident_url="p")

                        div(v-if="!vehicle.films.length == 0")
                            br
                            p.title.is-4 {{ $t('films') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(f, index) in vehicle.films")
                                    films(:film_url="f")
                             
                footer.card-footer
                    router-link.card-footer-item(:to="{ name: 'vehicles' }") {{ $t('return') }}
</template>

<script>
import { getVehiclesById } from '@/services/vehicles'
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
      vehicle: null,
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    getVehiclesById(id)
      .then( res => {
        console.log(res.data)
        this.vehicle = res.data
      })
      .catch(() => {
        this.vehicle = null
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