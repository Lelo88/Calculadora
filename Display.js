//la clase display contendrá todos lo que se visualice en la calculadora de acuerdo a los botones que apretemos

class Display {
    constructor(valAnterior, valActual) {
        this.valActual = valActual;
        this.valAnterior = valAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.actual = '';
        this.anterior = '';
        this.signos = {
            suma: '+',
            dividsion: '/',
            multiplicacion: 'x',
            resta: '-', 
        }
    }

    borrar() {
        this.actual = this.actual.toString().slice(0,-1); //recortamos el valor actual en su ultima posicion
        this.imprimirValores(); //imprimimos los valores para que se actualice el display
    }

    borrarTodo() { //vuelvo con los valores principales, reseteandolos
        this.actual = '';
        this.anterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    validarBoton(tipo) { //recibiremos como argumento los botones +,-,*,/ y =
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.anterior = this.actual || this.anterior;
        this.actual = '';
        this.imprimirValores();
    }

    agregarNumero(numero) { //recibiremos como argumento los botones de clase numero
        if(numero === '.' && this.actual.includes('.')) return
        this.actual = this.actual.toString() + numero.toString(); //va concatenando todos los valores que ingresemos
        this.imprimirValores();
    }

    imprimirValores() {
        this.valActual.textContent = this.actual; //imprime el valor ultimo que ingresamos
        this.valAnterior.textContent = `${this.anterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const anterior = parseFloat(this.anterior);
        const actual = parseFloat(this.actual);

        if( isNaN(actual)  || isNaN(anterior) ) return
        this.actual = this.calculador[this.tipoOperacion](anterior, actual);
    }
}