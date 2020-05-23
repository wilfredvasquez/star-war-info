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
        button.button.is-dark.has-text-centered
            span(@click="goToFilm()") {{ $t('view_detail') }}
</template>

<script>
export default {
  props: {
    film: { type: Object, required: true },
    id: {required: true}
  },

  methods: {
    goToFilm () {
      console.log("View detail")
      // const id = this.id + 1
      // this.$router.push({ name: 'planet_detail', params: { id } })
    }
  }
}
</script>