<template lang="pug">
  .card
    .card-content
      .media
        .media-content.has-text-centered
          p.title.is-6
            strong {{ specie.name }}
          p.is-6 {{ $t('classification') }}: {{ specie.classification | capitalize }}
          p.is-6 {{ $t('language') }}: {{ specie.language  }}

      .content
        router-link.button.is-dark.has-text-centered(:to="{ name: 'specie_detail', params: { id: idDetail } }") {{ $t('view_detail') }}
</template>

<script>
import getIdMixin from '@/mixins/getId'
export default {
  mixins: [getIdMixin],
  props: {
    specie: { type: Object, required: true },
    id: {required: true}
  },
  computed: {
    idDetail () {
      return this.getId(this.specie.url)
    }
  }
}
</script>