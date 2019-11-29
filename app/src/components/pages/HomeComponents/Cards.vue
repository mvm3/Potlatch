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
              <b-col md="5" lg = "5" sm ="5" xs="5" style="text-align: left;  font-weight: bold; font-size: 0.8em;">
                  <b-col md="12" lg = "12" sm ="12" xs="12">
                     <img :src ="Tagimg" style = "max-width: 20px;"/>
                     {{ project.projectTag}}
                  </b-col>
                  <b-col md="12" lg = "12" sm ="12" xs="12">   
                    <img :src="LocImg" style="max-width: 20px;">
                      {{project.projectLoc}}
                  </b-col>
                   <b-col md="12" lg = "12" sm ="12" xs="12">   
                    <img :src="SocialImg" style="max-width: 20px;">
                      <a :href= project.projectInstagramUrl>{{project.projectInstagramName}}</a>
                  </b-col>
                  
                 
              </b-col>   
                <b-col md="7" lg = "7" sm ="7" xs="7">
                  <b-col md="12" lg = "12" sm ="12" xs="12" 
                  style="text-align: center; margin-bottom: 0.5rem; font-weight: 1000; line-height: 1.2; font-size: 2em;">
                    {{project.PeopleQuantity}} <img :src="PeopleImg" style="max-width: 40px;"> 
                  </b-col>   
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

.btn-outline-primary
{
  color: #FD463D;
  border-color: #FD463D;
}
.btn-outline-primary:hover, a:hover{
  background-color: #FD463D;
  color: #fff;
}
h4{
   font-weight: bold;
}


</style>

<script>
  export default {
    data () {
    return {
              Tagimg:'https://cdn.icon-icons.com/icons2/412/PNG/128/PriceTag_40928.png'  ,
              LocImg:'https://icon-icons.com/icons2/412/PNG/64/Location_41047.png',
              SocialImg: 'https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579602-yumminkysocialmedia36_83067.png',
              PeopleImg : 'https://cdn.icon-icons.com/icons2/72/PNG/256/people_14383.png',
      projects:[
            {
              projectId: 1,
              projectName: 'Escambo Coletivo',
              projectDesc: "O Escambo Coletivo quer a utilização coletiva de espaços públicos, comunitários e de cultura e lazer pra estimular a ideia de ocupar um espaço que é nosso por direito.",
              projectImg: "https://bit.ly/2NPybt1",
              projectTag: 'Direito a Cidade',
              projectInstagramName: ' @escambocoletivo',
              projectInstagramUrl: 'https://www.instagram.com/escambocoletivo/',
              projectLoc : 'Paratibe',
              projectValuein : 180,
              projectValueDesired :2000,
              PeopleQuantity: 100
            },
            {
              projectId: 2,
              projectName: 'Espaço Solidário Gris',
              projectDesc: "O Projeto Gris atende famílias em situação de vulnerabilidade socioeconômica, através de um conjunto de atividades de apoio psicossociais no bairro da Várzea.",
              projectImg: "https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/74355242_543631352875002_5124216478882594816_n.jpg?_nc_cat=101&_nc_ohc=v-3L4k7KrHUAQlkG7Vr5-HZ_tUAxBtVhcBPnw5bDb2FU_Q4x3cxh5C0vA&_nc_ht=scontent.frec5-1.fna&oh=f537a0d4847a390265a827a1ede9a63e&oe=5E88F9A4",
              projectTag: 'Educação',
              projectInstagramName: ' @gris.solidario',
              projectInstagramUrl: 'https://www.instagram.com/gris.solidario/',
              projectLoc : 'Várzea',
              projectValuein : 100,
              projectValueDesired : 500,
              PeopleQuantity: 80
            }, 
            {
              projectId: 3,
              projectName: 'Rádio Aconchego',
              projectDesc: "O nosso objetivo é construir um meio de comunicação em que possamos falar e nos escutar em nossas comunidades, compartilhando tanto anseios, quanto experiências positivas, te mantendo atualizado. ",
              projectImg: " https://bit.ly/2NKBDFj",
              projectTag: 'Comunicação',
              projectInstagramName: ' @radioaconchego',
              projectInstagramUrl: 'https://www.instagram.com/radioaconchego/',
              projectLoc : 'Várzea',
              projectValuein : 750,
              projectValueDesired : 5000,
              PeopleQuantity: 25
            },
            {
              projectId: 4,
              projectName: 'Tigres de Aço',
              projectDesc: "Temos como objetivo mudar a vida das crianças e jovens da comunidade. Através o karatê e do judô, mostrando que com disciplina, treinamento e foco, serão capazes de alcançar seus maiores sonhos.",
              projectImg: "https://bit.ly/2CcOMlr",
              projectTag: 'Esportes',
              projectInstagramName: ' @tigresdeacokarate',
              projectInstagramUrl: 'https://www.instagram.com/tigresdeacokarate/',
              projectLoc : 'Mustardinha',
              projectValuein : 538,
              projectValueDesired : 4000,
              PeopleQuantity: 43
          }
        ]
    }
  },
  }
</script>