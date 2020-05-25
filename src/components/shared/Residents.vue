<template lang="pug">
    div(v-if="resident.name")
        p.has-text-weight-bold  {{ resident.name }}
        p 
            router-link.button.is-dark.has-text-centered(:to="{ name: 'people_detail', params: { id: resident.id } }") {{ $t('view_detail') }}
</template>

<script>
import { getPeopleById } from '@/services/people'
import getIdMixin from '@/mixins/getId'

export default {
  mixins: [getIdMixin],
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
    this.resident.id = this.getId(this.resident_url)
    getPeopleById(this.resident.id)
      .then( res => {
        this.resident.name = res.data.name
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