<template>
  <header class="site-header site-header-color clearfix " id="header">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="float-left logo">
            <nuxt-link class="navbar-item" :to="localePath('/')">
              <logo class="navbar-logo" />
            </nuxt-link>
          </div> <!-- /.logo -->
          <div class="main-navigation float-right">
            <nav class="main-nav visible-md visible-lg">
              <ul class="sf-menu">
                <li>
                  <nuxt-link :to="localePath('/participate')" class="navbar-item is-hidden-desktop">
                    {{ $t('navigation.participate') }}
                  </nuxt-link>
                </li>
              </ul> <!-- /.sf-menu -->
            </nav> <!-- /.main-nav -->

            <!-- This one in here is responsive menu for tablet and mobiles -->
            <div class="responsive-navigation visible-sm visible-xs">
              <a href="#nogo" class="menu-toggle-btn">
                <i class="fa fa-bars" />
              </a>
            </div> <!-- /responsive_navigation -->
          </div> <!-- /.main-navigation -->
        </div> <!-- /.col-md-12 -->
      </div> <!-- /.row -->
    </div> <!-- /.container -->
  </header> <!-- /.site-header -->
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  data () {
    return {
      isActive: false,
      scrollPosition: null,
      scrollTop: 0,
    }
  },
  watch: {
    '$route' () {
      this.isActive = false
    },
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    },
    updateScroll () {
      this.scrollPosition = window.scrollY
      const header = document.getElementById('header')
      console.log(document.body.scrollTop)
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('site-header-scroll')
        header.classList.remove('site-header-color')
      } else {
        header.classList.remove('site-header-scroll')
        header.classList.add('site-header-color')
      }
    },

  },
}

</script>

<style lang="scss" scoped>

</style>
