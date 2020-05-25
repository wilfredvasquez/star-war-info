<template lang="pug">
    div(v-if="planet.name")
        p.has-text-weight-bold  {{ planet.name }}
        p 
            router-link.button.is-dark.has-text-centered(:to="{ name: 'planet_detail', params: { id: planet.id } }") {{ $t('view_detail') }}
</template>

<script>
import { getPlanetsById } from '@/services/planets'
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    planet_url: { type: String, required: true },
  },
  data () {
    return {
      planet: {
        name: null,
        id: null
      }
    }
  },
  created (){
    this.planet.id = this.getId(this.planet_url)
    getPlanetsById(this.planet.id)
      .then( res => {
        this.planet.name = res.data.name
      })
      .catch(() => {
        console.log
      })
  }

}
</script>