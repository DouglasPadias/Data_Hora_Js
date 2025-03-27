// Utilizando o setInterval() para atualizar o relogio a cada segundo.
function updateClock(){
    const now = new Date(); // Buscando data atual
    
    // INICIO DATA:
    const semanaElement = document.querySelector('.semana');
    const diaElement = document.querySelector('.dia');
    const mesElement = document.querySelector('.mes');
    const anoElement = document.querySelector('.ano');

    // Criando arrays para modificar os dias e meses.
    // No javascript o zero é o Domingo, e o ultimo é o seis (Sabado)
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const semana = dias[now.getDay()];
    const dia = now.getDate().toString();
    const mes = meses[now.getMonth()];
    const ano = now.getFullYear();

    anoElement.innerText = ano;
    semanaElement.innerText = semana;
    diaElement.innerText = dia;
    mesElement.innerText = mes;
    // FIM DATA!

    // INICIO HORA:
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    hoursElement.innerText = hours;
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
}
// setInterval vai chamar a função acada 1000 milessegundos.
setInterval(updateClock, 1000);
