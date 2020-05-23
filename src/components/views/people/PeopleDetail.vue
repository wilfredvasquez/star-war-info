<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-if="!isLoading && !showNotification")
        .container.results
            .card
                header.card-header
                    p.card-header-title.title {{ person.name }} 
                
                .card-content
                    .content
                        div
                            p.title.is-4 {{ $t('basic_information') }}
                            
                            .columns.is-desktop
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('birth_year') }}
                                    p {{ person.birth_year }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('gender') }}
                                    p {{ gender | capitalize }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('skin_color') }}
                                    p {{ person.skin_color | capitalize }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('hair_color') }}
                                    p {{ person.hair_color | capitalize }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('eye_color') }}
                                    p {{ person.eye_color | capitalize }}
                                .column.is-2 
                                    p.has-text-weight-bold {{ $t('height') }} / {{ $t('mass') }}
                                    p {{ person.height }} / {{ person.mass }}

                        div(v-if="person.homeworld")
                            br
                            div(v-if="person.homeworld")
                              p.title.is-4 {{ $t('homeworld') }}
                              
                              home-world(:homeworld_url="person.homeworld")

                        div(v-if="!person.films.length == 0")
                            br
                            div
                              p.title.is-4 {{ $t('films') }}
                              .container.results
                                .columns.is-multiline.is-centered
                                  .column.is-one-quarter(v-for="(f, index) in person.films")
                                    films(:film_url="f")

                        div(v-if="!person.species.length == 0")
                            br
                            p.title.is-4 {{ $t('species') }}
                            
                            .columns.is-desktop
                                .column.is-12
                                    p.has-text-weight-bold {{ $t('species') }}
                                    p {{ person.species }}
                        
                        div(v-if="!person.vehicles.length == 0")
                            br
                            p.title.is-4 {{ $t('vehicles') }}
                            
                            .columns.is-desktop
                                .column.is-12
                                    p.has-text-weight-bold {{ $t('vehicles') }}
                                    p {{ person.vehicles }}
                        
                        div(v-if="!person.starships.length == 0")
                            br
                            p.title.is-4 {{ $t('starships') }}
                            
                            .columns.is-desktop
                                .column.is-12
                                    p.has-text-weight-bold {{ $t('starships') }}
                                    p {{ person.starships }}

                
                footer.card-footer
                    router-link.card-footer-item(:to="{ name: 'home' }") {{ $t('return') }}
</template>

<script>
import { getPeopleById } from '@/services/people'
import Films from '@/components/shared/Films'
import HomeWorld from '@/components/views/people/HomeWorld'
import Loader from '@/components/shared/Loading.vue'
import Notification from '@/components/shared/Notification.vue'

export default {
  components: {
    Loader,
    Notification,
    HomeWorld,
    Films
  },
  data () {
    return {
      isLoading: false,
      showNotification: false,
      person: null,
      homeworld: {
        name: null,
        id: null
      }
    }
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id
    getPeopleById(id)
      .then( res => {
        console.log(res.data)
        this.person = res.data
      })
      .catch(() => {
        this.person = null
        this.showNotification = true
      })
      .finally(() => {
        this.isLoading = false
      })
  },
  computed: {
    gender () {
      if(this.person.gender === 'n/a'){
        return this.person.gender.toUpperCase()
      }
      return this.person.gender
    },
  }
  
}
</script>

<style lang="scss" scoped>
.lds-hourglass {
  margin-bottom: 10em;
  margin-top: 10em;
}
</style>