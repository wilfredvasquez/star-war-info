<template lang="pug">
    div
      loader(v-if="isLoading")
      section.section(v-show="!isLoading")
        .container.results
          .columns.is-multiline
            .column.is-one-quarter(v-for="p in people")
              people-basic-info(:person="p")
          pagination(:pages="pages" @change-current-page="changePage")
</template>

<script>
import { getAllPeople } from '@/services/people'
import Loader from '@/components/shared/Loading.vue'
import Pagination from '@/components/shared/Pagination.vue'
import PeopleBasicInfo from '@/components/views/people/PeopleBasicInfo'

export default {
  data () {
    return {
      isLoading: true,
      people: null,
      pages: {
        nextPage: null,
        previousPage: null,
        currentPage: 1
      }
    }
  },
  components: {
    Loader,
    PeopleBasicInfo,
    Pagination
  },
  created () {
    this.getListPeople()
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
      this.getListPeople()
    },
    getListPeople () {
      this.isLoading = true
      getAllPeople(this.pages.currentPage)
      .then( res => {
        console.log(res.data)
        this.people = res.data.results
        this.pages.nextPage = this.getPage(res.data.next)
        this.pages.previousPage = this.getPage(res.data.previous)
      })
      .catch((err) => {
        this.people = null
        console.log(`Ha ocurrido un error => ${err}`)
      })
      .finally(() => {
        this.isLoading = false
      })
    }
  }
  
}
</script>