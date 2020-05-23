<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-show="!isLoading")
        .container.results
          .columns.is-multiline.is-centered
            .column.is-one-quarter(v-for="(v, index) in vehicles")
              vehicles-basic-info(:vehicle="v", :id="index")
          pagination(:pages="pages" @change-current-page="changePage")
</template>

<script>
import { getAllVehicles } from '@/services/vehicles'
import Loader from '@/components/shared/Loading.vue'
import Notification from '@/components/shared/Notification.vue'
import Pagination from '@/components/shared/Pagination.vue'
import VehiclesBasicInfo from '@/components/views/vehicles/VehiclesBasicInfo'

export default {
  components: {
    Loader,
    VehiclesBasicInfo,
    Pagination,
    Notification
  },
  data () {
    return {
      isLoading: false,
      showNotification: false,
      vehicles: null,
      pages: {
        nextPage: null,
        previousPage: null,
        currentPage: 1
      }
    }
  },
  created () {
    this.getListVehicles()
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    getPage (urlPage) {
      if (!urlPage){ return null }
      return urlPage.split("=")[1]
    },
    changePage (currentPage) {
      this.pages.currentPage = currentPage
      this.pages.previousPage = currentPage - 1
      this.pages.nextPage = currentPage + 1
      this.getListVehicles()
    },
    getListVehicles() {
      this.isLoading = true
      getAllVehicles(this.pages.currentPage)
      .then( res => {
        this.vehicles = res.data.results
        this.pages.nextPage = this.getPage(res.data.next)
        this.pages.previousPage = this.getPage(res.data.previous)
      })
      .catch(() => {
        this.vehicles = null
        this.showNotification = true
      })
      .finally(() => {
        this.isLoading = false
      })
    }
  }
  
}
</script>

<style lang="scss" scoped>
.lds-hourglass {
  margin-bottom: 10em;
  margin-top: 10em;
}
</style>