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
        router-link.button.is-dark.has-text-centered(:to="{ name: 'vehicle_detail', params: { id: idDetail } }") {{ $t('view_detail') }}
</template>

<script>
import getIdMixin from '@/mixins/getId'
export default {
  mixins: [getIdMixin],
  props: {
    vehicle: { type: Object, required: true },
    id: {required: true}
  },
  computed: {
    idDetail () {
      return this.getId(this.vehicle.url)
    }
  }
}
</script>