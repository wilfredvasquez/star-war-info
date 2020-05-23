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
        button.button.is-dark.has-text-centered
            span(@click="goToPerson()") {{ $t('view_detail') }}
</template>

<script>
export default {
  props: {
    planet: { type: Object, required: true },
    id: {required: true}
  },

  methods: {
    goToPerson () {
      console.log("View detail")
      const id = this.id + 1
      this.$router.push({ name: 'planet_detail', params: { id } })
    }
  }
}
</script>