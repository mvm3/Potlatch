<template>
    
<div id = "cards">
  <h1 style="text-align:center; margin:20px">Projetos</h1>
      <b-container class="bv-example-row" 
                  >
        <b-row>
          <b-col  v-for= "project in projects"
                   :key= "project.projectId"
                   cols = "12" sm ="12" md="6" lg = "6"  xl="6" 
                   class = "card">           
            <b-card no-body class="overflow-hidden" >
              <b-row >
                  <b-col md="5" lg = "5" sm ="5" xs="5">
                      <b-card-img :src = "project.projectImg"
                                  class="rounded-circle" ></b-card-img>
                  </b-col>
                  <b-col md="7" lg = "7" sm ="7" xs="7">
                      <b-card-body :title = "project.projectName">
                        <b-card-text>
                          {{ project.projectDesc}}
                        </b-card-text>
                      </b-card-body>  
                  </b-col> 
              </b-row>
                  
          <b-container>
            <b-row> 
              <b-col md="5" lg = "5" sm ="5" xs="5">
                  <b-col md="12" lg = "12" sm ="12" xs="12">
                     <img :src ="Tagimg" style = "max-width: 20px;"/>
                     {{ project.projectTag}}
                  </b-col>
                  <b-col md="12" lg = "12" sm ="12" xs="12">   
                    <img :src="LocImg" style="max-width: 20px;">
                      {{project.projectLoc}}
                  </b-col>
                 
              </b-col>   
                <b-col md="7" lg = "7" sm ="7" xs="7">
                  <h5> {{project.projectValuein}} R$ / {{project.projectValueDesired}} R$</h5>
                  <b-progress :max= "project.projectValueDesired" :precision="2"  label show-progress class="mb-3">
                      <b-progress-bar variant="success" :value="project.projectValuein"></b-progress-bar>
                      <b-progress-bar variant="secondary" :value="project.projectValueDesired - project.projectValuein "></b-progress-bar>
                  </b-progress>                             
                    <b-button :to="/details/+project.projectId" size="lg" variant="outline-primary">Ver mais</b-button>
                </b-col>                            
            </b-row>   
          </b-container>
        </b-card>
        
          </b-col>

             
        </b-row>
        </b-container>
    </div>
</template>

<style scoped>

.rounded-circle
{
  margin: 10px;
  max-width: 200px;
  max-height: 200px;
}
#cards button
{
  text-align: center;
  margin-bottom: 15px;
}
#cards a
{
  vertical-align: middle;
  margin-bottom: 10px;
}

.card
{
  margin-top:10px;
  text-align: center;
}


</style>

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
  }
</script>