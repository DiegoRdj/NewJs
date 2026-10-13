function Calculadora() {
        this.display = document.querySelector('.display') // o uso de : é pq é um objeto
        this.btnClear = document.querySelector('.btn-clear')
        
            this.inicia = function(){
                    this.cliqueBotoes(); // tem q usar this pois é uma chave do objeto
                   this.pressionaEnter();
            }

            this.pressionaEnter = function(){
                this.display.addEventListener("keyup", (e) => { //melhor uso para arrow function
                    if (e.keyCode === 13) {
                        this.realizaConta()
                    }
                })
            };

            this.realizaConta = function(){
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
            };

         this.clearDisplay = function(){
            this.display.value = "";
         };

         this.apagueUm = function(){
            this.display.value = this.display.value.slice(0, -1) // tamanho da String, -1, apaga um numero
         };
        this.cliqueBotoes = function(){

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
        };
        this.btnParaDisplay = function(valor){
            this.display.value += valor
        };
    };
    

const calculadora = new Calculadora();
calculadora.inicia();