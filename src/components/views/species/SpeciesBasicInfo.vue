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
        button.button.is-dark.has-text-centered
            span(@click="goToSpecie()") {{ $t('view_detail') }}
</template>

<script>
export default {
  props: {
    specie: { type: Object, required: true },
    id: {required: true}
  },

  methods: {
    goToSpecie () {
      console.log("View detail")
      // const id = this.id + 1
      // this.$router.push({ name: 'planet_detail', params: { id } })
    }
  }
}
</script>