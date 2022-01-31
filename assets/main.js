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
    segunda = domingo + 1;
    terca = 31 - 30;
    quarta = terca + 1;
    quinta = quarta + 1;
    sexta = quinta + 1;
    sabado = sexta + 1;
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
    segunda = "0"+segunda;
}
if(terca == 1 || terca == 2 || terca == 3 || terca == 4 || terca == 5 || terca == 6
|| terca == 7 || terca == 8 || terca == 9){
    terca = "0"+terca;
}
if(quarta == 1 || quarta == 2 || quarta == 3 || quarta == 4 || quarta == 5 || quarta == 6
|| quarta == 7 || quarta == 8 || quarta == 9){
    quarta = "0"+quarta;
}
if(quinta == 1 || quinta == 2 || quinta == 3 || quinta == 4 || quinta == 5 || quinta == 6
|| quinta == 7 || quinta == 8 || quinta == 9){
    quinta = "0"+quinta;
}
if(sexta == 1 || sexta == 2 || sexta == 3 || sexta == 4 || sexta == 5 || sexta == 6
|| sexta == 7 || sexta == 8 || sexta == 9){
    sexta = "0"+sexta;
}
if(sabado == 1 || sabado == 2 || sabado == 3 || sabado == 4 || sabado == 5 || sabado == 6
|| sabado == 7 || sabado == 8 || sabado == 9){
    sabado = "0"+sabado;
}    

//Pega os ID's e insere as informações
document.getElementById('domingo').innerHTML = domingo;
document.getElementById('segunda').innerHTML = segunda;
document.getElementById('terca').innerHTML = terca;
document.getElementById('quarta').innerHTML = quarta;
document.getElementById('quinta').innerHTML = quinta;
document.getElementById('sexta').innerHTML = sexta;
document.getElementById('sabado').innerHTML = sabado;

/* SALVANDO OS DADOS */
var salvar = document.getElementById('salvar').addEventListener('click',()=>{
    var mensagem = document.getElementsByName('mensagem').value;

    localStorage.setItem(mensagem,JSON.stringify(mensagem));
    var resgatarMensagem = localStorage.getItem(mensagem);

    return resgatarMensagem;
});