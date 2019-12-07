<template>
  <div class="geral">

    <b-form inline>
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-input
        id="inline-form-input-name"
        class="buscador mb-2 mr-sm-2 mb-sm-0"
        placeholder="Digite aqui"
      ></b-input>

      <b-button variant="secondary" style="margin-left:2%">Pesquisar</b-button>
    </b-form>
    <b-form inline>
      <input type="radio" id="nome" value="localizacao" name="grupo" />
      <label for="localizacao">Nome/Título</label>
      <br />
      <input type="radio" id="local" value="localizacao" name="grupo" />
      <label for="localizacao">Localização</label>
      <br />
      <input type="radio" id="tematica" value="tematica" name="grupo" />
      <label for="tematica">Causa/Temática/Tag</label>
      <br />
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Buscador"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.geral {
  margin-top: 23%;
  margin-left: 15%;
  overflow: hidden; /* tirar barrar de scrolling */
}

input {
  margin-left: 2%;
}

.buscador {
  padding-right: 50%;
}
</style>
