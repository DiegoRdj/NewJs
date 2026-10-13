function criaCalculadora() {
    return{
        
        display: document.querySelector('.display'), // o uso de : é pq é um objeto
        btnClear: document.querySelector('.btn-clear'),
        
            inicia(){
                    this.cliqueBotoes(); // tem q usar this pois é uma chave do objeto
                   this.pressionaEnter();
            },

            pressionaEnter(){
                this.display.addEventListener("keyup", (e) => { //melhor uso para arrow function
                    if (e.keyCode === 13) {
                        this.realizaConta()
                    }
                })
            },

            realizaConta(){
                let conta = this.display.value;
                
                try{
                    conta = eval(conta) //tenta realizar a conta
                    if (!conta) {
                        alert("Conta Invalida")
                        return;
                    }
                    this.display.value = String(conta)
                } catch (e){
                    alert("Conta Invalida")
                    return;
                }
            },

         clearDisplay(){
            this.display.value = "";
         },

         apagueUm(){
            this.display.value = this.display.value.slice(0, -1) // tamanho da String, -1, apaga um numero
         },
        cliqueBotoes(){

            // this -> calculadora

            document.addEventListener("click", (e) => { // caso use arrow function, nn precisa do .bind()
               const el = e.target; 
               
               if(el.classList.contains("btn-num")){
                this.btnParaDisplay(el.innerText);
               }

               if(el.classList.contains("btn-clear")){
                this.clearDisplay()
               }
               if(el.classList.contains("btn-del")) {
                this.apagueUm()
               }

               if(el.classList.contains("btn-eq")) {
                this.realizaConta()
               }
            }); //.bind() ta falando para função usar o meu this, ou seja o this da calculadora
        },
        btnParaDisplay(valor){
            this.display.value += valor
        }
    };
    
}

const calculadora = criaCalculadora();
calculadora.inicia();