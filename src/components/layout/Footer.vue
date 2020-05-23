<template lang="pug">
  footer.footer
    .container
      .content.has-text-centered
        .columns
          .column.is-4.has-text-right
            img.footer-img(alt="Laser" src="@/assets/imgs/sable.png")
          .column.is-4
            span Star War's World by @wilfredvas
          .column.is-4.has-text-left
            img.footer-img(alt="Laser" src="@/assets/imgs/sable.png")
</template>

<style lang="scss" scope>
.footer-img{
    max-width: 30%;
}
span {
  line-height: 2em;
  margin-bottom: 2em;
}
</style>