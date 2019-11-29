<template>
  <b-container id="projectDetails" class="bv-example-row">
    <b-row>
      <b-col class="text-center" lg="12">
        <div class="heading">
          <b-img class="projectCoverImage"
          :src="projects[index].projectCover"
        ></b-img>

        </div>
        <b-img class="projectImage"
          :src="projects[index].projectImg"
        ></b-img>
        
        <b-col lg="12" md="12" sm ="6" xs="6" class="text-center" style="padding-left: 40%;"> 
          <b-col md="12" lg = "12" sm ="6" xs="6" style="text-align: left;  font-weight: bold; font-size: 0.8em;">
                  <b-col md="12" lg = "12" sm ="12" xs="12">
                     <img :src ="Tagimg" style = "max-width: 20px;"/>
                     {{ projects[index].projectTag}}
                  </b-col>
                  <b-col md="12" lg = "12" sm ="12" xs="12">   
                    <img :src="LocImg" style="max-width: 20px;">
                      {{projects[index].projectLoc}}
                  </b-col>
                   <b-col md="12" lg = "12" sm ="12" xs="12">   
                    <img :src="SocialImg" style="max-width: 20px; ">
                      <a :href= projects[index].projectInstagramUrl>{{projects[index].projectInstagramName}}</a>
                  </b-col>
              </b-col>   
          
        </b-col>   
          <b-button variant="primary">Compartilhar Projeto</b-button>

          <b-button variant="success">Doar</b-button>
      </b-col>
    </b-row>
     <h1>{{projects[index].projectName}}</h1>
    <b-row>
      
      <b-col lg="12" class="projectContent">        
        <span  >
          {{projects[index].projectDesc}}
        </span>        
      </b-col>
     
    </b-row>
        
       
  </b-container>
</template>

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
              projectDesc: "O ESCAMBO COLETIVO é um grupo de intervenção sócio-cultural criado em 2009, por artistas, educadores e ativistas políticos, na cidade do Paulista-PE. O grupo surge com o objetivo de intervir diretamente na paisagem social do bairro de Paratibe, área de moradia e atuação dos seus membros. O ESCAMBO COLETIVO atua na construção coletiva de espaços públicos comunitários de cultura e lazer desassistidos pelo poder público, promovendo a utilização consciente destes equipamentos através de ações que integram a promoção de bens culturais, o acesso a mídias alternativas, o debate de questões relacionadas ao direito à cidade e o fomento a prática esportiva comunitária.",
              projectImg: "https://bit.ly/2NPybt1",
              projectCover: "https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/77253959_2530176663766016_1443621100406702080_o.jpg?_nc_cat=104&_nc_ohc=lacAFV98tNwAQniHHd_5GterP9OHPwHPtVT0nd0zsWl5nsD_Kl0qAbnxA&_nc_ht=scontent.frec5-1.fna&oh=6dcb3cc3d5fe623d04e34cc046bec058&oe=5E818E6E",
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
              projectName: 'Gris - Espaço Solidário',
              projectDesc: "O Projeto Gris atende famílias em situação de vulnerabilidade socioeconômica, através de um conjunto de atividades de apoio psicossociais no bairro da Várzea, em Recife. Atua com um público variado: famílias vulneráveis, crianças e adolescentes (5 à 15 anos), com foco nas que possuem necessidades especiais, e mães.  Atualmente atende cerca de 60 crianças e suas famílias. Possui espaço físico e já conta com alguns voluntários, dentre eles: pedagogos, psicólogos, enfermeira e cientista social. Dentre as atividades realizadas estão: doação de alimentos, roupas e produtos de higiene, oferta de oficinas de arte/artesanato e atividades terapêuticas, atendimento psicológico, oficinas sobre cuidados com a saúde, etc. Todavia, o Projeto tem dificuldades financeiras para se manter e um grande de desafio de se inserir no espaço digital. Desta forma, pode divulgar para um público mais amplo e, assim, mobilizar mais recursos financeiros e materiais, engajar voluntários permanentes, oficineiros e padrinhos para as famílias carentes.Sendo assim, com este projeto se pretende criar a presença digital do Projeto Gris e arrecadar doações para as demandas mais urgentes.",
              projectImg: "https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/74355242_543631352875002_5124216478882594816_n.jpg?_nc_cat=101&_nc_ohc=v-3L4k7KrHUAQlkG7Vr5-HZ_tUAxBtVhcBPnw5bDb2FU_Q4x3cxh5C0vA&_nc_ht=scontent.frec5-1.fna&oh=f537a0d4847a390265a827a1ede9a63e&oe=5E88F9A4",
              projectCover: "https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/46373893_356092174962255_6271820603523596288_o.jpg?_nc_cat=104&_nc_ohc=kxSYwzkg860AQkGH1NaW_0DHsYYF_sgh-Wd-fwEC70u0I6GlYyY4GGrpg&_nc_ht=scontent.frec5-1.fna&oh=25adf02574121dabdc80f33e77108e30&oe=5E7B022E",
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
              projectDesc: "A rádio Aconchego é uma rádio comunitária que funciona dentro do Serviço Integrado de Saúde (SIS), no bairro do Engenho do Meio, no Recife. Transmitimos 24h por fm e internet. Nossa programação visa promover debates de interesse social e difundir a cultura popular. No ano de 2016 desenvolvemos oficinas de comunicação comunitária voltadas aos usuários do SIS. Estimular a criatividade e expressividade dos participantes, além da reflexão sobre os processos comunicativos e produção em áudio e texto foram o foco das oficinas. Também em 2016, se deram as ocupações de escolas de ensino médio no Recife. Contribuimos com oficinas de mídias táticas nas escolas, atividades que procuraram abranger diversidade de suportes (audiovisual, arte gráfica, etc) empoderando os adolescentes para utilizarem sua criatividade e autonomia, promovendo direitos à livre expressão e à manifestação. ",
              projectImg: "https://bit.ly/2NKBDFj",
              projectCover: "https://scontent.frec5-1.fna.fbcdn.net/v/t31.0-8/10857322_871273099595967_975370795739645651_o.jpg?_nc_cat=108&_nc_ohc=AxDpZE_69ikAQkIrDdK5Eg1v0lBWO00Sr8NzlRVXirGYudFMm7GEjOPuA&_nc_ht=scontent.frec5-1.fna&oh=0b340e145c1fce6155291734d0c74a14&oe=5E4499FA",
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
              projectCover: "https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/54729724_1271957976305388_375354917327470592_n.jpg?_nc_cat=103&_nc_ohc=9Sh08jAPlmsAQliVZ9SGQIsHvkZV-vtmrR7037Qzx5q-PAwr4L8mp29Gg&_nc_ht=scontent.frec5-1.fna&oh=f9324f4ad084701d02106b11d201ea15&oe=5E7EF01A",
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
  computed:{
    index: function (){
      return this.$route.params.id -1
    }
  }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.heading {
  background-size: cover;
  background-color: lightgray;
  height: 30em;
}

.projectImage {
  position:relative;
  top: -8em;
  margin-bottom: -7em;
  width: 15em;
  height: 15em;
  border-radius: 20%;
  border: 0.5em solid rgb(0,0,0,0.3)
}

.projectImageGallery {
 
  width: 50%;
  height: 25em;
  border: 0.5em solid rgb(0,0,0,0.3)
}


.projectCoverImage
{
  height: 30em;
  width: 100%;
}
.projectContent
{
  height: 30em;
  margin: 30px;
}

h1 {
  text-align: center;
  margin-top: 10px;
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
