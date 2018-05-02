

class Apoiador {
    _id: string;
    nome: string;
    totalPago: number;
    totalNaoPago: number;

    constructor() {
        this.nome = '';
        this.totalPago = 0;
        this.totalNaoPago = 0;
    }
}

export default Apoiador;
