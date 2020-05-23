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
        button.button.is-dark.has-text-centered
            span(@click="goToStarship()") {{ $t('view_detail') }}
</template>

<script>
export default {
  props: {
    starship: { type: Object, required: true },
    id: {required: true}
  },

  methods: {
    goToStarship () {
      console.log("View detail")
      // const id = this.id + 1
      // this.$router.push({ name: 'planet_detail', params: { id } })
    }
  }
}
</script>