<template>
  <div>
    <section id="homeIntro" class="parallax first-widget">
        <div class="parallax-overlay">
          <div class="container home-intro-content">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title is-1">
                    {{ $t('general.site-name') }}
                  </h2>
                  <p> {{ $t('general.site-description') }}</p>
                </div> <!-- /.col-md-12 -->
              </div> <!-- /.row -->
          </div> <!-- /.container -->
        </div> <!-- /.parallax-overlay -->
    </section> <!-- /#homeIntro -->
    <section class="cta clearfix">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h4 class="cta-title"><strong>Aplicación móvil</strong> disponibles para descarga</h4>
            <a href="#" class="main-button accent-color">Descargar<i class="icon-button fa fa-arrow-right"></i></a>
          </div> <!-- /.col-md-12 -->
        </div> <!-- /.row -->
      </div> <!-- /.container -->
    </section> <!-- /.cta -->
  </div>
</template>

<script>
export default {
}
</script>
