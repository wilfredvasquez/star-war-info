<template lang="pug">
    div
        p.has-text-weight-bold {{ film_url }}
</template>

<script>
export default {
  props: {
    film_url: { type: String, required: true },
  },
  data () {
      return {
          film: {
              name: null,
              id: null
          }
      }
  },
}
</script>