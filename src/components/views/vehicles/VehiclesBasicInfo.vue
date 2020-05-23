<template lang="pug">
  .card
    .card-content
      .media
        .media-content.has-text-centered
          p.title.is-6
            strong {{ vehicle.name }}
          p.is-6 {{ $t('model') }}: {{ vehicle.model | capitalize }}
          p.is-6 {{ $t('class') }}: {{ vehicle.vehicle_class | capitalize }}

      .content
        button.button.is-dark.has-text-centered
            span(@click="goToVehicle()") {{ $t('view_detail') }}
</template>

<script>
export default {
  props: {
    vehicle: { type: Object, required: true },
    id: {required: true}
  },

  methods: {
    goToVehicle () {
      console.log("View detail")
      // const id = this.id + 1
      // this.$router.push({ name: 'planet_detail', params: { id } })
    }
  }
}
</script>