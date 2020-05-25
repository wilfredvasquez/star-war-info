<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-if="!isLoading && !showNotification")
        .container.results
            .card
                header.card-header
                    p.card-header-title.title {{ specie.name }}
                
                .card-content
                    .content
                        div
                            p.title.is-4 {{ $t('basic_information') }}
                            
                            .columns.is-desktop
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('classification') }} / {{ $t('designation') }}
                                    p {{ specie.classification }} / {{ specie.designation }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('skin_color') }}
                                    p {{ specie.skin_colors }}
                                .column.is-2
                                    p.has-text-weight-bold {{ $t('eye_color') }}
                                    p {{ specie.eye_colors }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('hair_color') }}
                                    p {{ specie.hair_colors }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('lifespan') }} / {{ $t('height') }} (Avg)
                                    p {{ specie.average_lifespan }} / {{ specie.average_height }}
                                .column.is-2
                                    p.has-text-weight-bold {{ $t('language') }}
                                    p {{ specie.language }}

                        div(v-if="!specie.people.length == 0")
                            br
                            p.title.is-4 {{ $t('people') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(p, index) in specie.people")
                                    residents(:resident_url="p")

                        div(v-if="!specie.films.length == 0")
                            br
                            p.title.is-4 {{ $t('films') }}
                            
                            .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(f, index) in specie.films")
                                    films(:film_url="f")
                             
                footer.card-footer
                    router-link.card-footer-item(:to="{ name: 'species' }") {{ $t('return') }}
</template>

<script>
import { getSpeciesById } from '@/services/species'
import Residents from "@/components/shared/Residents"
import Films from '@/components/shared/Films'
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
      specie: null,
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    getSpeciesById(id)
      .then( res => {
        this.specie = res.data
      })
      .catch(() => {
        this.specie = null
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