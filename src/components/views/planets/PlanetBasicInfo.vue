<template lang="pug">
  .card
    .card-content
      .media
        .media-content.has-text-centered
          p.title.is-6
            strong {{ planet.name }}
          p.is-6 {{ $t('climate') }}: {{ planet.climate | capitalize }}
          p.is-6 {{ $t('population') }}: {{ planet.population  }}

      .content
        router-link.button.is-dark.has-text-centered(:to="{ name: 'planet_detail', params: { id: idDetail } }") {{ $t('view_detail') }}
</template>

<script>
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    planet: { type: Object, required: true },
    id: {required: true}
  },
  computed: {
    idDetail () {
      return this.getId(this.planet.url)
    }
  }
}
</script>