// Seleciona todos os elementos <li> dentro do elemento com o ID 'image-picker'
const buttons = document.querySelectorAll('#image-picker li');

// Seleciona o elemento com o ID 'product-image'
const image = document.querySelector('#product-image');

// Itera sobre cada botão (<li>) encontrado
buttons.forEach((btn) => {
    // Adiciona um ouvinte de evento para o clique em cada botão
    btn.addEventListener('click', (e) => {

        // Remove a classe 'selected' de todos os botões
        buttons.forEach((btn) => {
            btn.querySelector('.color').classList.remove('selected');
        });

        // Obtém o botão clicado a partir do evento
        const button = e.target;

        // Obtém o valor do atributo 'id' do botão clicado
        const id = button.getAttribute('id');

        // Adiciona a classe 'selected' ao botão clicado
        button.querySelector('.color').classList.add('selected');

        // Adiciona a classe 'changing' à imagem para iniciar uma animação (por exemplo, um efeito de transição)
        image.classList.add('changing');
        
        // Atualiza o atributo 'src' da imagem com base no ID do botão clicado, alterando a imagem exibida
        image.setAttribute('src', `img/iphone_${id}.jpg`);

        // Remove a classe 'changing' após 200 milissegundos para terminar a animação
        setTimeout(() => {
            image.classList.remove('changing');
        }, 200);
    });
});
