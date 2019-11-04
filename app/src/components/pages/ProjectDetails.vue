<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <h1>Projeto Social Teste</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img
          src="https://static.vakinha.com.br/uploads/vakinha/image/365379/cover_32814ceb-01a8-4aa3-8819-b0776908a353_x365.jpg"
        ></b-img>
      </b-col>
      <b-col>
        <h4>Descrição:</h4>
        <br />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nostrum natus ratione dignissimos nisi est dolorem culpa, quas iure temp
          ore non cumque dolore accusamus eaque, at quisquam. Ab, ratione architecto.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga nobis quae in
          dolor obcaecati esse neque magni necessitatibus facere. Aliquid quasi id consequatur
          dolores ipsum placeat tempora labore blanditiis.
        </span>
        <br />
        <b-button variant="primary">Compartilhar Projeto</b-button>
        <b-button variant="success">Doar</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
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
  color: #42b983;
}
span {
  text-align: left;
}
button {
  margin: 0.5em;
}
</style>
