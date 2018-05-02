

class Campanha {
    _id: string;
    nome: string;
    totalApoiadores: string[];
    totalApoiosCobrados: number;
    totalApoiosNaoCobrados: number;
    inadimplencia: string[];

    constructor() {
        this.nome = '';
        this.totalApoiadores = [];
        this.totalApoiosCobrados = 0;
        this.totalApoiosNaoCobrados = 0;
        this.inadimplencia = [];
    }
}

export default Campanha;
