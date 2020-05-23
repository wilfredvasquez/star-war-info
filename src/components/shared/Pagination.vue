<template lang="pug">
    nav.pagination.is-centered(role="navigation", aria-label="pagination")
        a.pagination-previous(:disabled="!pages.previousPage")(@click="previousPage") {{ $t('previuos') }}
        a.pagination-next(:disabled="!pages.nextPage")(@click="nextPage") {{ $t('next') }}
        ul.pagination-list
            li(v-show="pages.previousPage")
                a.pagination-link(aria-label="Goto page 1")(@click="previousPage") {{ pages.previousPage }}
            li
                a.pagination-link.is-current-page(aria-label="Page 46", aria-current="page") {{ pages.currentPage }}
            li(v-show="pages.nextPage")
                a.pagination-link(aria-label="Goto page 47")(@click="nextPage") {{ pages.nextPage }}
</template>


<script>
export default {
  props: ["pages"],
  methods: {
    nextPage () {
        if(!this.pages.nextPage) { return }
        const page = this.pages.currentPage + 1
        this.$emit('change-current-page', page)
    },
    previousPage () {
        if(!this.pages.previousPage) { return }
        const page = this.pages.currentPage -1
        this.$emit('change-current-page', page)
    }
  }
}
</script>

<style lang="scss" scope>
.pagination-link.is-current-page {
    background-color: #363636;
    border-color: #363636;
    color: #fff;
}
</style>