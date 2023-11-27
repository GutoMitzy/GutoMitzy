function alterarStatus(id) {
    let identificador = document.getElementById(`game-${id}`);
    let imagem = identificador.querySelector('.dashboard__item__img');
    let botao = identificador.querySelector('.dashboard__item__button');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}