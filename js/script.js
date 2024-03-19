const { createApp } = Vue;


createApp({
  data(){
    return{
      risultato: 'Loading...',
      numero1:0,
      numero2:0,
      apiUrl:'https://flynn.boolean.careers/exercises/api/random/int',
      numResults:0

    }
  },
  methods:{

    getApis(){
      this.risultato = '';
      axios.get(this.apiUrl)
      .then( res => {
        this.numero1 = res.data.response;
        this.numResults++;
        this.checkRisultato();
      })
      axios.get(this.apiUrl)
      .then( res => {
        this.numero2 = res.data.response
        this.numResults++
        this.checkRisultato();
      })
    },

    checkRisultato(){
      if(this.numResults === 2){
        if(this.numero1 > this.numero2){
          this.risultato = 'Il numero 1 è maggiore di numero 2';
        }else if(this.numero1 < this.numero2){
          this.risultato = 'Il numero 1 è infieriore a numero 2';
        }else{
          this.risultato = 'I numeri sono uguali';
        }
      }
    }

  },
  mounted(){
    this.getApis();

  }
}).mount('#app')