<template lang="pug">
    div(v-if="film.title")
        p.has-text-weight-bold  {{ film.title }}
        p 
            router-link.button.is-dark.has-text-centered(:to="{ name: 'film_detail', params: { id: film.id } }") {{ $t('view_detail') }}
</template>

<script>
import { getFilmsById } from '@/services/films'
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    film_url: { type: String, required: true },
  },
  data () {
    return {
      film: {
        title: null,
        id: null
      }
    }
  },
  created (){
    this.film.id = this.getId(this.film_url)
    getFilmsById(this.film.id)
      .then( res => {
        this.film.title = res.data.title
      })
      .catch(() => {
        console.log
      })
  }

}
</script>