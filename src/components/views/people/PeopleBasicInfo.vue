<template lang="pug">
  .card
    .card-content
      .media
        .media-content.has-text-centered
          p.title.is-6
            strong {{ person.name }}
          p.is-6 {{ $t('gender') }}: {{ gender | capitalize }}
          p.is-6 {{ $t('birth_year') }}: {{ person.birth_year  }}

      .content
        router-link.button.is-dark.has-text-centered(:to="{ name: 'people_detail', params: { id: idDetail } }") {{ $t('view_detail') }}
</template>

<script>
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    person: { type: Object, required: true },
    id: {required: true}
  },
  computed: {
    gender () {
      if(this.person.gender === 'n/a'){
        return this.person.gender.toUpperCase()
      }
      return this.person.gender
    },
    idDetail () {
      return this.getId(this.person.url)
    }
  }
}
</script>