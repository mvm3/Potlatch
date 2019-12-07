<template>
  <div>
    <div class="mx-auto mt-5 mb-5 MAPA" id="mapa">
      <iframe
        src="https://www.google.com/maps/d/u/0/embed?mid=1WNvTl0yewSWw6sSpR4adSKbD6UOrB6xg"
        width="1050"
        height="580"
        scrolling="auto"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>


<script>
export default {
  name: "Descubra",
  components: {}
};
</script>

<style  scoped>
.MAPA {
  width: 40%;
  height: 50%;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->

