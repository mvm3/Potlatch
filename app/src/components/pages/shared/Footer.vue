<template>

  <div class="footer">
    
    <footer class="page-footer font-small blue pt-4">
      <div class="container-fluid text-center text-md-left">
        <!-- Grid row -->
        <div class="row">
          <!-- Grid column -->
          <div class="col-md-6 mt-md-0 mt-3">
            <!-- Content -->
            <h5 class="text-uppercase">Footer Content</h5>
            <p>Here you can use rows and columns to organize your footer content.</p>
          </div>
          <!-- Grid column -->
          <hr class="clearfix w-100 d-md-none pb-3" />
          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
          <!-- Grid column -->
          <div class="col-md-3 mb-md-0 mb-3">
            <!-- Links -->
            <h5 class="text-uppercase">Links</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
           <font-awesome-icon icon="spinner" flip="both" />
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2019 Copyright:
        <a href="#">Potlatch</a>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

footer {
    position: fixed;
    height: auto;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    clear: both;
    background-color: white;
    font-family: 'Gotham-Light';
    border-top: 1px solid rgba(128,128,128, 0.2) !important;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color:#FD463D;
}

</style>
