<template lang="pug">
    div(v-if="resident.name")
        p.has-text-weight-bold  {{ resident.name }}
        p 
            router-link.button.is-dark.has-text-centered(:to="{ name: 'people_detail', params: { id: resident.id } }") {{ $t('view_detail') }}
</template>

<script>
import { getPeopleById } from '@/services/people'
export default {
  props: {
    resident_url: { type: String, required: true },
  },
  data () {
      return {
          resident: {
              name: null,
              id: null
          }
      }
  },
  created (){
    const length = this.resident_url.toString().split("/").length
    const id_resident = this.resident_url.toString().split("/")[length-2]
    getPeopleById(id_resident)
      .then( res => {
        console.log(res.data)
        this.resident.name = res.data.name
        this.resident.id = id_resident
      })
      .catch(() => {
        console.log
      })
      .finally(() => {
        this.isLoading = false
      })
  }

}
</script>