<template>
    
<div id = "cards">
      <b-container class="bv-example-row">
        <h1 style="text-align:center;">Projetos</h1>
        <b-row>
          <b-col cols = "6" sm ="6" md="6" lg = "6"  xl="6"  style="margin-top:10px;">           
            <b-card no-body class="overflow-hidden" style="max-width: 540px;">
              <b-row no-gutters>
                  <b-col md="5" lg = "5" sm ="5" xs="5">
                      <b-card-img src="https://pbs.twimg.com/profile_images/1070622958362783746/Nl2nnZDN_400x400.jpg" class="rounded-circle" ></b-card-img>
                  </b-col>
                  <b-col md="7" lg = "7" sm ="7" xs="7">
                      <b-card-body title= "Escambo coletivo">
                        <b-card-text>
                            O Escambo quer a utilização coletiva de espaços públicos, comunitários e de cultura e lazer pra estimular a ideia de ocupar um espaço que é nosso por direito.
                        </b-card-text>
                      </b-card-body>  
                  </b-col> 
              </b-row>
                  
          <b-container>
            <b-row> 
              <b-col md="5" lg = "5" sm ="5" xs="5">
                  <b-col md="12" lg = "12" sm ="12" xs="12">
                     <img src="https://www.docsbase.com.br/wp-content/uploads/2019/06/icone-tipo-traducao-medica-resultado-clinico.png" style="width: 50px;">
                      Cultura
                  </b-col>
                  <b-col md="12" lg = "12" sm ="12" xs="12">   
                    <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-location-icon-png-image_4231887.jpg" style="width: 50px;">
                      Localização
                  </b-col>
                 
              </b-col>   
                <b-col md="7" lg = "7" sm ="7" xs="7">
                  <h5>180 R$ / 2000 R$</h5>
                  <b-progress :max="2000" :precision="2"  label show-progress class="mb-3">
                      <b-progress-bar variant="success" :value="180"></b-progress-bar>
                      <b-progress-bar variant="secondary" :value="1820"></b-progress-bar>
                  </b-progress>                             
                   <a href="">   <b-button size="lg" variant="outline-primary">Ver mais</b-button> </a>
                </b-col>                            
            </b-row>   
          </b-container>
        </b-card>
        
          </b-col>

             <b-col  cols = "6" sm ="6" md="6" lg = "6"  xl="6" style="margin-top:10px;" >
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5" lg = "5" sm ="5" xs="5">
                        <b-card-img src="https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/41880588_333000163938123_8590682436000546816_n.jpg?_nc_cat=110&_nc_oc=AQliElTZeH9_egnA062skdIFivmiYw_imf0Wu8XeGhn-4FULdKbP639UW8aMAfXP6vw&_nc_ht=scontent.frec5-1.fna&oh=5c95ba60cb2063781327a7780974f6ff&oe=5E1794FF" class="rounded-circle"></b-card-img>
                    </b-col>
                    <b-col md="7" lg = "7" sm ="7" xs="7">
                        <b-card-body title="Gris - Espaço Solidário">
                            <b-card-text>
                               O Projeto Gris atende famílias em situação de vulnerabilidade socioeconômica, através de um conjunto de atividades de apoio psicossociais no bairro da Várzea.
                            </b-card-text>
                            
                             
                             <h5>100 R$ / 500 R$</h5>
                                
                                  <b-progress :max="500" :precision="2"  label show-progress class="mb-3">
                                    <b-progress-bar variant="success" :value="100"></b-progress-bar>
                                    <b-progress-bar variant="secondary" :value="400"></b-progress-bar>
                                </b-progress>

                                <a href="">   <b-button size="lg" variant="outline-primary">Ver mais</b-button> </a>

                            
                        </b-card-body>
                       </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>

        <b-row>
            <b-container  style="width: 50%; margin-top:10px;">           
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5">
                        <b-card-img src="https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/16889_871707436219200_5314718003215055926_n.jpg?_nc_cat=106&_nc_oc=AQnc8DsbTGAjJdSePlTY-Cq1uc18fV02WNlYYck0zK9Ewg6SoFcPHtXOYn0H6grY9_JpDv8YT9OW1XASSAnPk2Ln&_nc_ht=scontent.frec5-1.fna&oh=559e01f5a26315612a95fa5f70a9d0dc&oe=5E59B7DA" class="rounded-circle" style="max-height = 350px"></b-card-img>
                    </b-col>
                    <b-col md="7">
                         <b-card-body title="Rádio Aconchego">
                            <b-card-text>
                               Nosso objetivo é construir um meio de comunicação em que possamos falar e nos escutar em nossas comunidades, compartilhando tanto anseios, quanto experiências positivas.
                            </b-card-text>
                                                         
                             <h5>750 R$ / 5.000 R$</h5>                                
                                  <b-progress :max="5000" :precision="2"  label show-progress class="mb-3">
                                    <b-progress-bar variant="success" :value="750"></b-progress-bar>
                                    <b-progress-bar variant="secondary" :value="4250"></b-progress-bar>
                                </b-progress>
                                <a href="">   <b-button size="lg" variant="outline-primary">Ver mais</b-button> </a>
                                                            
                        </b-card-body>
                    </b-col>
                    </b-row>
                </b-card>
            </b-container>

             <b-container style="width: 50%; margin-top:10px;" >
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                    <b-row no-gutters>
                    <b-col md="5" lg = "5" sm ="5" xs="5">
                        <b-card-img src="https://scontent.frec5-1.fna.fbcdn.net/v/t1.0-9/30729899_999796753521513_6351052760040865792_n.png?_nc_cat=101&_nc_oc=AQmyANRu0b3aK41gYd6l8pkW7REkOpFff-Sxqq2bNdx6tDedy5Om14kAdI1ZpxJx1Z6gBEyIaVSmjLam0THxJtbS&_nc_ht=scontent.frec5-1.fna&oh=05baf0289a76b8db4c12059d85585849&oe=5E610126" class="rounded-circle"></b-card-img>
                    </b-col>
                    <b-col md="7" lg = "7" sm ="7" xs="7">
                        <b-card-body title="Tigres de Aço">
                            <b-card-text>
                               Temos como objetivo mudar a vida das crianças e jovens da comunidade. Através o karatê e do judô, mostrando que com disciplina, treinamento e foco, serão capazes de alcançar seus maiores sonhos.
                            </b-card-text>
                                                         
                             <h5>538 R$ / 4.000 R$</h5>                                
                                  <b-progress :max="4000" :precision="2"  label show-progress class="mb-3">
                                    <b-progress-bar variant="success" :value="538"></b-progress-bar>
                                    <b-progress-bar variant="secondary" :value="3462"></b-progress-bar>
                                </b-progress>
                                <a href="">   <b-button size="lg" variant="outline-primary">Ver mais</b-button> </a>

                        </b-card-body>
                       </b-col>
                    </b-row>
                </b-card>
            </b-container>
        </b-row>
        </b-container>
    </div>
</template>

<style scoped>

.rounded-circle
{
  margin: 10px;
}
#cards h5
{
  text-align: center;
}
#cards a
{
  margin-left: 25%;
}
.card-title
{
  text-align: center;
}

.card-text
{
  text-align: center;
}
</style>