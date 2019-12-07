<template>
  <div>
    <h2>Efetive sua doação</h2>
    <h4>Você está ajudando a mudar vidas</h4>    
    <b-form radio>
      <input  type="radio" id="nome" value="cartao" name="grupo" />
      <label for="cartao">Cartão de crédito ou débito</label>
      <br />
      <input  type="radio" id="nome" value="boleto" name="grupo" />
      <label for="boleto">Boleto bancário</label>
      <br />
    </b-form>

    <VueCardPayment 
      :settings="{
        labels: {
          cardNumber: 'Número do cartão',
          month: 'Mês',
          year: 'Ano',
          cardHolder: 'Bandeira',
          button: 'Pagar'
        },
        placeholders: {
          cardNumber: '',
          month: '',
          year: '',
          cardHolder: '',
          cvv: ''
        },

        showBank: true,
        showPaymentSystem: true
      }"
    >
    </VueCardPayment>
  </div>
</template>

<script>


export default {
  name: "Pagamento",
  components: {},
  
 method:{
     
 },
}
</script>

<style scoped></style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
