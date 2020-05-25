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
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
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
      this.homeworld.id = this.getId(this.homeworld_url)
      getPlanetById(this.homeworld.id)
      .then( res => {
        this.homeworld.name = res.data.name
      })
      .catch((err) => {
        console.log(err)
        this.showNotification = true
      })
  }
}
</script>