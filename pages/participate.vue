<template>
  <div>
    <div id="portfolio" class="first-widget parallax">
      <div class="parallax-overlay">
        <div class="container pageTitle">
          <div class="row justify-content-md-center">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title text-center">
                {{ $t('participate.title') }}
              </h2>
            </div> <!-- /.col-md-6 -->
          </div> <!-- /.row -->
        </div> <!-- /.container -->
      </div> <!-- /.parallax-overlay -->
    </div> <!-- /.pageTitle -->
    <div class="container">
      <div class="row justify-content-md-center">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-12">
              <div v-md="$t('participate.intro-text')" class="pt-3" />
              <div class="contact-form">
                <iframe
                  :src="$t('participate.form-url')"
                  width="460"
                  height="1350"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                >
                  {{ $t('participate.loading') }}
                </iframe>
              </div> <!-- /.contact-form -->
            </div> <!-- /.col-md-12 -->
          </div> <!-- /.row -->
        </div> <!-- /.col-md-8 -->
      </div> <!-- /.row -->
    </div> <!-- /.container -->
  </div>
</template>

<style lang="scss">
.contact-form {
  text-align: center;

  iframe {
    margin: 0 auto;
  }
}
</style>
