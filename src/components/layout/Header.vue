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
            li(:class="this.$route.meta.is_people ? 'is-active': ''")
              router-link(:to="{ name: 'home' }") {{ $t('people') }}
            li(:class="this.$route.meta.is_planets ? 'is-active': ''")
              router-link(:to="{ name: 'planets' }") {{ $t('planets') }}
            li(:class="this.$route.meta.is_films ? 'is-active': ''")
              router-link(:to="{ name: 'films' }") {{ $t('films') }}
            li(:class="this.$route.meta.is_species ? 'is-active': ''")
              router-link(:to="{ name: 'species' }") {{ $t('species') }}
            li(:class="this.$route.meta.is_starships ? 'is-active': ''")
              router-link(:to="{ name: 'starships' }") {{ $t('starships') }}
            li(:class="this.$route.meta.is_vehicles ? 'is-active': ''")
              router-link(:to="{ name: 'vehicles' }") {{ $t('vehicles') }}
</template>

<script>
export default {
  methods: {
    selectLang (lang) {
      this.$i18n.locale = lang
    }
  },
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