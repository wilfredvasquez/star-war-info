<template lang="pug">
    div
      notification(v-show="showNotification")
        p(slot="body") {{ $t('message_notification') }}
      loader(v-if="isLoading")
      section.section(v-show="!isLoading")
        .container.results
          .columns.is-multiline.is-centered
            .column.is-one-quarter(v-for="(s, index) in species")
              species-basic-info(:specie="s", :id="index")
          pagination(:pages="pages" @change-current-page="changePage")
</template>

<script>
import { getAllSpecies } from '@/services/species'
import Loader from '@/components/shared/Loading.vue'
import Notification from '@/components/shared/Notification.vue'
import Pagination from '@/components/shared/Pagination.vue'
import SpeciesBasicInfo from '@/components/views/species/SpeciesBasicInfo'

export default {
  components: {
    Loader,
    SpeciesBasicInfo,
    Pagination,
    Notification
  },
  data () {
    return {
      isLoading: false,
      showNotification: false,
      species: null,
      pages: {
        nextPage: null,
        previousPage: null,
        currentPage: 1
      }
    }
  },
  created () {
    this.getListSpecies()
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
      this.getListSpecies()
    },
    getListSpecies() {
      this.isLoading = true
      getAllSpecies(this.pages.currentPage)
      .then( res => {
        this.species = res.data.results
        this.pages.nextPage = this.getPage(res.data.next)
        this.pages.previousPage = this.getPage(res.data.previous)
      })
      .catch(() => {
        this.species = null
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