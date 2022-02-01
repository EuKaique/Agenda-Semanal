/* TRABALHANDO COM DATAS */
var dataAtual = new Date();
var dia = dataAtual.getDay();
var diaHoje = String(dataAtual.getDate()).padStart(2 ,'0');
var primeiroDia = dataAtual.getDate() - dataAtual.getDay();
var ultimoDia = primeiroDia + 6;
var ano = dataAtual.getFullYear();
var hoje = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];
var meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

//Exibir mensagem com o dia, mês e ano
var semana = document.getElementById('semana');
semana.innerHTML = diaHoje + " de " + meses[dataAtual.getMonth()]+ " de " + ano;

//Exibir o dia de hoje
var diaAtual = document.getElementById('hoje');
diaAtual.innerHTML = "Hoje é "+hoje[dataAtual.getDay()];

//Inserir dia no cabeçalho
var domingo = dataAtual.getDate() - dataAtual.getDay();
var segunda = domingo + 1;
var terca = segunda + 1;
var quarta = terca + 1;
var quinta = quarta + 1;
var sexta = quinta + 1;
var sabado = sexta + 1;

//Verificar se o dia é maior que 31 e voltar pro dia 01
if(domingo == 31){
    segunda = 31 - 30;
    terca = segunda + 1;
    quarta = terca + 1;
    quinta = quarta + 1;
    sexta = quinta + 1;
    sabado = sexta + 1;
}
else if(segunda == 31){
    terca = 31 - 30;
    quarta = terca + 1;
    quinta = quarta + 1;
    sexta = quinta + 1;
    sabado = sexta + 1;
    domingo = terca + 29;
    segunda = domingo + 1;

}
else if(terca == 31){
    segunda = domingo + 1;
    terca = segunda + 1;
    quarta = 31 - 30;
    quinta = quarta + 1;
    sexta = quinta + 1;
    sabado = sexta + 1;
}
else if(quarta == 31){
    segunda = domingo + 1;
    terca = segunda + 1;
    quarta = terca + 1;
    quinta = 31 - 30;
    sexta = quinta + 1;
    sabado = sexta + 1;
}
else if(quinta == 31){
    segunda = domingo + 1;
    terca = segunda + 1;
    quarta = terca + 1;
    quinta = quarta + 1;
    sexta = 31 - 30;
    sabado = sexta + 1;
}
else if(sexta == 31){
    segunda = domingo + 1;
    terca = segunda + 1;
    quarta = terca + 1;
    quinta = quarta + 1;
    sexta = quinta + 1;
    sabado = 31 - 30;
}
else if(sabado == 31){
    segunda = domingo + 1;
    terca = segunda + 1;
    quarta = terca + 1;
    quinta = quarta + 1;
    sexta = quinta + 1;
    sabado = sexta + 1;
    domingo = 31 - 30;
}

//formatar as datas de 01 a  09
if(domingo == 1 || domingo == 2 || domingo == 3 || domingo == 4 || domingo == 5 || domingo == 6
|| domingo == 7 || domingo == 8 || domingo == 9){
    domingo = "0"+domingo;
}
if(segunda == 1 || segunda == 2 || segunda == 3 || segunda == 4 || segunda == 5 || segunda == 6
|| segunda == 7 || segunda == 8 || segunda == 9){

    if(segunda == 1){
        domingo = 31;
    }
    segunda = "0" + segunda;

}
if(terca == 1 || terca == 2 || terca == 3 || terca == 4 || terca == 5 || terca == 6
|| terca == 7 || terca == 8 || terca == 9){

    if(terca == 1){
        domingo = 30;
        segunda = 31;
    }
    terca = "0"+terca;

}
if(quarta == 1 || quarta == 2 || quarta == 3 || quarta == 4 || quarta == 5 || quarta == 6
|| quarta == 7 || quarta == 8 || quarta == 9){

    if(quarta == 1){
        domingo = 29;
        segunda = 30;
        terca = 31;
    }
    quarta = "0"+quarta;
}
if(quinta == 1 || quinta == 2 || quinta == 3 || quinta == 4 || quinta == 5 || quinta == 6
|| quinta == 7 || quinta == 8 || quinta == 9){

    if(quinta == 1){
        domingo = 28;
        segunda = 29;
        terca = 30;
        quarta = 31;
    }
    quinta = "0"+quinta;
}
if(sexta == 1 || sexta == 2 || sexta == 3 || sexta == 4 || sexta == 5 || sexta == 6
|| sexta == 7 || sexta == 8 || sexta == 9){

    if(sexta == 1){
        domingo = 27;
        segunda = 28;
        terca = 29;
        quarta = 30;
        quinta = 31;
    }
    sexta = "0"+sexta;
}
if(sabado == 1 || sabado == 2 || sabado == 3 || sabado == 4 || sabado == 5 || sabado == 6
|| sabado == 7 || sabado == 8 || sabado == 9){

    if(sabado == 1){
        domingo == 26;
        segunda = 27;
        terca = 28;
        quarta = 29;
        quinta = 30;
        sexta = 31;
    }
    sabado = "0"+sabado;
}    

//Saber se o ano é bissexto e aplicar validação para Fevereiro
/*
if((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)){
    /*
    var fevereiro = [
        01,02,03,04,05,06,07,08,09,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29
    ];
    
    if(meses['fevereiro']){

    }
}
*/



//Pega os ID's e insere as informações
document.getElementById('domingo').innerHTML = domingo;
document.getElementById('segunda').innerHTML = segunda;
document.getElementById('terca').innerHTML = terca;
document.getElementById('quarta').innerHTML = quarta;
document.getElementById('quinta').innerHTML = quinta;
document.getElementById('sexta').innerHTML = sexta;
document.getElementById('sabado').innerHTML = sabado;

/* SALVANDO OS DADOS */
$(function(){
    $('textarea').each(function() {
      $(this).val(localStorage.getItem($(this).attr('hour')));
    });
    $('#saveBox').on('click', function() {
        $('textarea').each(function() {
            var hour = $(this).attr('hour');
            var plans = $(this).val();
            localStorage.setItem(hour, plans);
        });
    });
});