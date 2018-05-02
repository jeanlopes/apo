
exports.checkDataVencida  = (vencimento) => {

    let d = new Date();

    let mesAtual = d.getUTCMonth() > 9 ? d.getUTCMonth() : '0' + d.getUTCMonth();
    let anoAtual = d.getFullYear();

    let dataAtual = anoAtual + '' + mesAtual;

    let mesCorrente = vencimento.mes > 9 ? vencimento.mes : '0' + vencimento.mes;
    let anoCorrente = vencimento.ano;
    let dataCorrente = anoCorrente + '' + mesCorrente;
    return dataAtual < dataCorrente;

}