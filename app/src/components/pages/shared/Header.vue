<template>
  <div>
    <b-navbar toggleable="lg" class="bg-primary">
      <b-navbar-brand href="#/">
        <img class="logo-header" src="./../../../assets/logo.png" alt="Página Inicial" />
        <!-- Potlatch -->
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Meus Projetos</b-nav-item>
          <b-nav-item href="#">Gatilhos</b-nav-item>
          <b-nav-item href="#">Minhas Doações</b-nav-item>
          <b-nav-item href="#">Prestação de Contas</b-nav-item>
          <!-- <b-nav-item href="#" disabled>Minhas Doações</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <div style="margin-right:20px">
                <b-button
                  size="sm"
                  class="botao"
                  type="submit"
                  href="#/Buscador"
                >
                  <b>Doar</b>
              </b-button>
            </div>
            <!--            <div style="margin-right:20px">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Buscar por localização"
              ></b-form-input>
              <b-button size="sm" class="botao" type="submit" href = "https://drive.google.com/open?id=1Eu__OmZCIjtVQjEmNCvREDY-6BzZIAql&usp=sharing"
                >Localizar</b-button
              >
            </div>
            <div>-->
            <!-- <span> Projetos </span> -->
            <!--
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Buscar por nome/tag"
              ></b-form-input>
              <b-button size="sm" class="botao" type="submit" href = "https://drive.google.com/open?id=1Eu__OmZCIjtVQjEmNCvREDY-6BzZIAql&usp=sharing"
                >Pesquisar</b-button
              >
            </div>-->
          </b-nav-form>

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
          </b-nav-item-dropdown>-->

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>Juliano</em>
            </template>
            <b-dropdown-item class="popupConfiguracao" href="#/perfil">Perfil</b-dropdown-item>
            <!-- já coloca a rota para o componente...  -->
            <b-dropdown-item class="popupConfiguracao" href="#/login">Login</b-dropdown-item>
            <b-dropdown-item class="popupConfiguracao" href="#">Link3</b-dropdown-item>
            <div class="dropdown-divider" style="background:black"></div>
            <b-dropdown-item class="popupConfiguracao" href="#">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.popupConfiguracao {
  padding-left: 22px;
}

.dropdown-item ul:hover {
  font-weight: bold;
  color: black;
  font-size: 30px;
  /* background-color: #FD463D; */
  /* text-align: center; */
}

.botao {
  background-color: #fd463d;
  color: #fd463d;
  background: #ffffff;
  border-color: #fd463d;
  border: 2px solid #fd463d; 
}

.botao:hover {
  background-color: #fd463d;
  border-color: white;
  font-weight: bold;
  color: #ffffff!important;
}

.logo-header {
  width: 35px;
  /* height: 50px; */
  margin-bottom: 8px;
}

nav {
  
  background-color: rgba(255, 255, 255, 0.6) !important;
  font-family: "Gotham-Light", "Open-Sans";
  border-bottom: 1px solid rgba(128,128,128, 0.2) !important;
  /* border-bottom-right-radius: 5%;
  border-bottom-left-radius: 5%; */
}

a {
  color: black !important;
  font-weight: bold;
  /* font-size: 15px; */
}

em {
  /* background-color: #FD463D!important;   */
  color: gray;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
  color: #fd463d !important;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: #fd463d !important;
}
/* a {
  color: #42b983;
} */


</style>
