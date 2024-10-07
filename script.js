document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o botão e o campo de input
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const resultadosSection = document.getElementById('resultados'); // Seleciona a seção de resultados

    // Função de busca
    function search() {
        const input = searchInput.value.toLowerCase();
        const items = document.querySelectorAll('.item-resultado');
        let hasResults = false; // Variável para verificar se há resultados

        items.forEach(item => {
            const text = item.innerText.toLowerCase();
            if (text.includes(input) && input) {
                item.style.display = 'block'; // Mostra o item
                hasResults = true; // Marca que temos resultados
            } else {
                item.style.display = 'none';  // Esconde o item
            }
        });

        // Adiciona ou remove a classe 'active' dependendo se há resultados
        if (hasResults) {
            resultadosSection.classList.add('active');
        } else {
            resultadosSection.classList.remove('active');
        }
    }

    // Adiciona um evento de clique no botão de busca
    searchButton.addEventListener('click', search);

    // Também permite buscar ao pressionar Enter no campo de input
    searchInput.addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            search();
        }
    });
});

