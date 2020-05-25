<template lang="pug">
  .card
    .card-content
      .media
        .media-content.has-text-centered
          p.title.is-6
            strong {{ starship.name }}
          p.is-6 {{ $t('model') }}: {{ starship.model | capitalize }}
          p.is-6 {{ $t('class') }}: {{ starship.starship_class | capitalize }}

      .content
        router-link.button.is-dark.has-text-centered(:to="{ name: 'starship_detail', params: { id: idDetail } }") {{ $t('view_detail') }}
</template>

<script>
import getIdMixin from '@/mixins/getId'
export default {
  mixins: [getIdMixin],
  props: {
    starship: { type: Object, required: true },
    id: {required: true}
  },
  computed: {
    idDetail () {
      return this.getId(this.starship.url)
    }
  }
}
</script>