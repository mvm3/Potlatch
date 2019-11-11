<template>
  <b-container id="projectDetails" class="bv-example-row">
    <b-row>
      <b-col>
        <h1>{{projects[index].projectName}}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-img
          :src="projects[index].projectImg"
        ></b-img>
      </b-col>
      <b-col >
        <h4>Descrição:</h4>
        <br />
        <span>
          {{projects[index].projectDesc}}
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
    data () {
    return {
              Tagimg:'https://bit.ly/2WNys3Q',
              LocImg:'https://bit.ly/2CmpQaY',
      projects:[
            {
              projectId: 1,
              projectName: 'Escambo Coletivo',
              projectDesc: "O Escambo Coletivo quer a utilização coletiva de espaços públicos, comunitários e de cultura e lazer pra estimular a ideia de ocupar um espaço que é nosso por direito.",
              projectImg: "https://bit.ly/2NPybt1",
              projectTag: 'Cultura',
              projectLoc : 'Localização',
              projectValuein : 180,
              projectValueDesired :2000
            },
            {
              projectId: 2,
              projectName: 'Gris - Espaço Solidário',
              projectDesc: "O Projeto Gris atende famílias em situação de vulnerabilidade socioeconômica, através de um conjunto de atividades de apoio psicossociais no bairro da Várzea.",
              projectImg: "https://bit.ly/2WQ2eFo",
              projectTag: 'Educação',
              projectLoc : 'Localização',
              projectValuein : 100,
              projectValueDesired : 500
            }, 
            {
              projectId: 3,
              projectName: 'Rádio Aconchego',
              projectDesc: "Nosso objetivo é construir um meio de comunicação em que possamos falar e nos escutar em nossas comunidades, compartilhando tanto anseios, quanto experiências positivas.",
              projectImg: "https://bit.ly/2NKBDFj",
              projectTag: 'Comunicação',
              projectLoc : 'Localização',
              projectValuein : 750,
              projectValueDesired : 5000
            },
            {
              projectId: 4,
              projectName: 'Tigres de Aço',
              projectDesc: "Temos como objetivo mudar a vida das crianças e jovens da comunidade. Através o karatê e do judô, mostrando que com disciplina, treinamento e foco, serão capazes de alcançar seus maiores sonhos.",
              projectImg: "https://bit.ly/2CcOMlr",
              projectTag: 'Esportes',
              projectLoc : 'Localização',
              projectValuein : 538,
              projectValueDesired : 4000
          }
        ]
    }
  },
  computed:{
    index: function (){
      return this.$route.params.id -1
    }
  }
  }
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
img {
  width: 25em;
  height: 25em;
}
span {
  text-align: left;
}
button {
  margin: 0.5em;
  
}
</style>
