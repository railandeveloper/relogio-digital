/*const horas = document.getElementById('horas');

Aqui, estamos obtendo o elemento HTML com o atributo id igual a "horas" e armazenando-o na variável horas. Isso presumivelmente representa a parte do relógio onde as horas serão exibidas.
const minutos = document.getElementById('minutos');

Similarmente, estamos obtendo o elemento HTML com o atributo id igual a "minutos" e armazenando-o na variável minutos. Isso representa a parte do relógio onde os minutos serão exibidos.
const segundos = document.getElementById('segundos');

Novamente, estamos obtendo o elemento HTML com o atributo id igual a "segundos" e armazenando-o na variável segundos. Isso representa a parte do relógio onde os segundos serão exibidos.
const relogio = setInterval(function time() {

Aqui, estamos configurando um intervalo de tempo repetido usando a função setInterval. Isso significa que o código dentro da função será executado repetidamente com um intervalo de tempo definido.
let dateToday = new Date();

Estamos criando um novo objeto de data dateToday, que representa a data e a hora atuais.
let hr = dateToday.getHours();

Extraímos a hora atual da data e a armazenamos na variável hr.
let min = dateToday.getMinutes();

Extraímos os minutos atuais da data e os armazenamos na variável min.
let seg = dateToday.getSeconds();

Extraímos os segundos atuais da data e os armazenamos na variável seg.
if( hr < 10) hr='0' + hr;

Se a hora for menor que 10, adicionamos um zero à esquerda para garantir que seja exibido no formato "hh".
if( min < 10) min='0' + min;

Da mesma forma, se os minutos forem menores que 10, adicionamos um zero à esquerda para garantir que seja exibido no formato "mm".
if( seg < 10) seg='0' + seg;

Se os segundos forem menores que 10, adicionamos um zero à esquerda para garantir que seja exibido no formato "ss".
horas.textContent = hr;

Atualizamos o conteúdo do elemento HTML representando as horas com o valor da variável hr.
minutos.textContent = min;

Atualizamos o conteúdo do elemento HTML representando os minutos com o valor da variável min.
segundos.textContent = seg;

Atualizamos o conteúdo do elemento HTML representando os segundos com o valor da variável seg.
Dentro do intervalo de tempo definido pelo setInterval, essas linhas de código são executadas repetidamente, obtendo a hora atual do sistema, formatando-a como uma string no formato "hh:mm:ss" e atualizando os elementos HTML correspondentes para exibir a hora atual em tempo real no formato desejado.*/