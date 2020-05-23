<template lang="pug">
  .card
    .card-content
      .media
        .media-content.has-text-centered
          p.title.is-6
            strong {{ person.name }}
          p.is-6 {{ $t('gender') }}: {{ person.gender }}
          p.is-6 {{ $t('birth_year') }}: {{ person.birth_year  }}

      .content
        button.button.is-dark.has-text-centered
            span(@click="goToTrack()") {{ $t('view_detail') }}
</template>

<script>
export default {
  props: {
    person: { type: Object, required: true }
  },

  methods: {
    goToPerson () {
      console.log("Ver detalles")

    }
  },

  computed: {
      typeGender () {
          if (this.person.gender === "male") { return 0 }
          else if (this.person.gender === "female") { return 1 }
          else { return 2 }
      }
  }
}
</script>