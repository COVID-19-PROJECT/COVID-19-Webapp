<template>
  <footer class="site-footer">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <nav class="footer-nav clearfix">
                 <ul class="footer-menu">
                    <nuxt-link :to="localePath('/terms-of-use')">
                      {{ $t('navigation.terms-of-use') }}
                    </nuxt-link>
                 </ul>

               </nav> <!-- /.footer-nav -->
            </div> <!-- /.col-md-12 -->
         </div> <!-- /.row -->
        </div> <!-- /.container -->
   </footer> <!-- /.site-footer -->
</template>
