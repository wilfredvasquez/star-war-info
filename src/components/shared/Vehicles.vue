<template lang="pug">
    div(v-if="vehicle.name")
        p.has-text-weight-bold  {{ vehicle.name }}
        p 
            router-link.button.is-dark.has-text-centered(:to="{ name: 'vehicle_detail', params: { id: vehicle.id } }") {{ $t('view_detail') }}
</template>

<script>
import { getVehiclesById } from '@/services/vehicles'
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
  props: {
    vehicle_url: { type: String, required: true },
  },
  data () {
    return {
      vehicle: {
        name: null,
        id: null
      }
    }
  },
  created (){
    this.vehicle.id = this.getId(this.vehicle_url)
    getVehiclesById(this.vehicle.id)
      .then( res => {
        this.vehicle.name = res.data.name
      })
      .catch(() => {
        console.log
      })
  }

}
</script>