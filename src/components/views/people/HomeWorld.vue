<template lang="pug">
  div
    .columns.is-desktop(v-if="homeworld.name")
        .column.is-12
            p.has-text-weight-bold {{ homeworld.name }}
            p
              router-link.button.is-dark.has-text-centered(:to="{ name: 'planet_detail', params: { id: homeworld.id } }") {{ $t('view_planet') }}
</template>

<script>
import { getPlanetById } from '@/services/planets'

export default {
  props: {
    homeworld_url: { type: String, required: true },
  },
  data () {
      return {
          homeworld: {
              name: null,
              id: null
          }
      }
  },
  created () {
      const length = this.homeworld_url.toString().split("/").length
      const id_planet = this.homeworld_url.toString().split("/")[length-2]
      getPlanetById(id_planet)
      .then( res => {
        console.log(res.data)
        this.homeworld.name = res.data.name
        this.homeworld.id = id_planet
      })
      .catch((err) => {
        console.log(err)
        this.showNotification = true
      })
  }
}
</script>