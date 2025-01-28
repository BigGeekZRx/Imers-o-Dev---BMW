// Evento de rolagem para o cabeçalho
window.addEventListener("scroll", function () {
    let header = document.querySelector('#header'); // Seleciona o elemento com o ID 'header'
    
    // Adiciona ou remove a classe 'rolagem' no cabeçalho dependendo da posição da rolagem
    header.classList.toggle('rolagem', window.scrollY > 10); // Se a rolagem for maior que 10px, a classe 'rolagem' é adicionada
});

// Quando o conteúdo da página for carregado
document.addEventListener('DOMContentLoaded', function() {
    
    // Controle do menu de navegação (abertura e fechamento)
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active'); // Alterna a classe 'active' para mostrar ou esconder o menu
    });

    // Adiciona rolagem suave aos links internos (ancoras)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o comportamento padrão de clicar no link (pular para o destino)
            // Rolagem suave até o destino do link
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Define o comportamento suave na rolagem
            });
        });
    });
});
