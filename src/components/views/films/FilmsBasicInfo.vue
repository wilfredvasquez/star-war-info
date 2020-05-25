<template lang="pug">
  .card
    .card-content
      .media
        .media-content.has-text-centered
          p.title.is-6
            strong {{ film.title }}
          p.is-6 {{ $t('episode') }}: {{ film.episode_id }}
          p.is-6 {{ $t('director') }}: {{ film.director  }}

      .content
        router-link.button.is-dark.has-text-centered(:to="{ name: 'film_detail', params: { id: idDetail } }") {{ $t('view_detail') }}
</template>

<script>
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    film: { type: Object, required: true },
    id: {required: true}
  },
  computed: {
    idDetail () {
      return this.getId(this.film.url)
    }
  }
}
</script>