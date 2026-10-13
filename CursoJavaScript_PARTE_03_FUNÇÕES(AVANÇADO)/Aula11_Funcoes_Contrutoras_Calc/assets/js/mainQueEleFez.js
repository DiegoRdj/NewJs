function Calculadora() { /// Criou funcao contrutora
    this.display = document.querySelector('.display')
    
    this.inicia = () => { // o js vai buscar por estes metodos, vai anadr a funcao toda
        this.capturaCliques()
        this.capturaEnter();
    }

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
            this.realizaConta()
            }
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', (event) => {
            const el = event.target; //pega o botao clicado
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    }

    this.addNumDisplay = (el) =>{
    this.display.value += el.innerText;
    this.display.focus();
    }
    this.clear = () => this.display.value = ""
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert("Conta Invalida")
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert("Conta Ivalida")
            return;
        }
    }
}

const calculadora = new Calculadora();
calculadora.inicia() // chamou o metodo