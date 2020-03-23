<template>
  <header class="site-header clearfix">
		<div class="container">

			<div class="row">

				<div class="col">
					<div class="float-left logo">
        <nuxt-link class="navbar-item" :to="localePath('/')">
          <logo class="navbar-logo" />
        </nuxt-link>
					</div>	<!-- /.logo -->

					<div class="main-navigation float-right">

						<nav class="main-nav visible-md visible-lg">
							<ul class="sf-menu" >
					            <li>        <nuxt-link :to="localePath('/participate')" class="navbar-item is-hidden-desktop">
          {{ $t('navigation.participate') }}
        </nuxt-link></li>
							</ul> <!-- /.sf-menu -->
						</nav> <!-- /.main-nav -->

						<!-- This one in here is responsive menu for tablet and mobiles -->
					    <div class="responsive-navigation visible-sm visible-xs">
					        <a href="#nogo" class="menu-toggle-btn">
					            <i class="fa fa-bars"></i>
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
    }
  },
  methods: {
    toggleMenu () {
      this.isActive = !this.isActive
    },
  },
  watch: {
    '$route' () {
      this.isActive = false
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
