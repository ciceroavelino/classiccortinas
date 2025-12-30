// Preços base por m² (em reais) - AJUSTE CONFORME NECESSÁRIO
const precos = {
    'cortina-voil': 85,
    'cortina-blackout': 150,
    'cortina-linho': 120,
    'persiana-horizontal': 180,
    'persiana-vertical': 160,
    'persiana-rolo': 200
};

// Simulador de preço
document.getElementById('simulador-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const tipo = document.getElementById('tipo').value;
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    if (!tipo || !largura || !altura) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Calcula área em m²
    const area = (largura / 100) * (altura / 100);
    
    // Calcula preço base
    let precoBase = area * precos[tipo];
    
    // Adiciona margem para instalação e acabamento (20%)
    const precoFinal = precoBase * 1.2;
    
    // Formata o valor
    const valorFormatado = precoFinal.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
    
    // Exibe resultado
    document.getElementById('preco-valor').textContent = valorFormatado;
    document.getElementById('resultado').classList.remove('hidden');
    
    // Scroll suave para o resultado
    document.getElementById('resultado').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header com sombra ao rolar
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});