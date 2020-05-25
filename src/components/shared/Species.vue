<template lang="pug">
    div(v-if="specie.name")
        p.has-text-weight-bold  {{ specie.name }}
        p 
            router-link.button.is-dark.has-text-centered(:to="{ name: 'specie_detail', params: { id: specie.id } }") {{ $t('view_detail') }}
</template>

<script>
import { getSpeciesById } from '@/services/species'
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    specie_url: { type: String, required: true },
  },
  data () {
    return {
      specie: {
        name: null,
        id: null
      }
    }
  },
  created (){
    this.specie.id = this.getId(this.specie_url)
    getSpeciesById(this.specie.id)
      .then( res => {
        this.specie.name = res.data.name
      })
      .catch(() => {
        console.log
      })
  }

}
</script>