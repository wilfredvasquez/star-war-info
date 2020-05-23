<template lang="pug">
  section.hero.is-dark
    .hero-head
      header
      nav.navbar
          .navbar-end.pr
            .navbar-item
              a(@click="selectLang('en')") 🇺🇸
            .navbar-item
              a(@click="selectLang('es')") 🇪🇸

    .hero-body
      .container.has-text-centered
        img.header-logo(alt="Vue logo" src="@/assets/imgs/star-war-logo2.png")
        h2.title.has-text-warning {{ $t('all_about_star_war') }}
    
    .hero-foot
      nav.tabs.is-boxed.is-fullwidth
        .container
          ul
            li.is-active
              a {{ $t('people') }}
            li
              a {{ $t('planets') }}
            li
              a {{ $t('films') }}
            li
              a {{ $t('species') }}
            li
              a {{ $t('starships') }}
            li
              a {{ $t('vehicles') }}
</template>

<script>
export default {
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  }
}
</script>

<style lang="scss" scope>
.header-logo{
    width: 20%;
}
.pr {
  padding-right: 5em;
}
</style>