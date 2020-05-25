<template lang="pug">
    div(v-if="starship.name")
        p.has-text-weight-bold  {{ starship.name }}
        p 
            router-link.button.is-dark.has-text-centered(:to="{ name: 'starship_detail', params: { id: starship.id } }") {{ $t('view_detail') }}
</template>

<script>
import { getStarshipsById } from '@/services/starships'
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    starship_url: { type: String, required: true },
  },
  data () {
    return {
      starship: {
        name: null,
        id: null
      }
    }
  },
  created (){
    this.starship.id = this.getId(this.starship_url)
    getStarshipsById(this.starship.id)
      .then( res => {
        this.starship.name = res.data.name
      })
      .catch(() => {
        console.log
      })
  }

}
</script>