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
        button.button.is-dark.has-text-centered
            span(@click="goToPerson()") {{ $t('view_detail') }}
</template>

<script>
export default {
  props: {
    person: { type: Object, required: true },
    id: {required: true}
  },

  methods: {
    goToPerson () {
      const id = this.id + 1
      this.$router.push({ name: 'people_detail', params: { id } })
    }
  },
  computed: {
    gender () {
      if(this.person.gender === 'n/a'){
        return this.person.gender.toUpperCase()
      }
      return this.person.gender
    }
  }
}
</script>