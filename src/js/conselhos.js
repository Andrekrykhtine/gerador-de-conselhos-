// Seleção de elementos
const adviceButton = document.getElementById('botao');
const adviceNumberElement = document.getElementById('conselho');
const adviceMessageElement = document.getElementById('mensagem');

// URL da API de conselhos
const ADVICE_API_URL = "https://api.adviceslip.com/advice";

// Função para buscar conselho da API
async function fetchAdvice() {
    try {
        // Busca conselho da API
        const response = await fetch(ADVICE_API_URL);

        // Verifica se a resposta é válida
        if (!response.ok) {
            throw new Error("Falha ao buscar conselho");
        }

        // Extrai dados do conselho
        const { slip } = await response.json();
        const { id: adviceNumber, advice: adviceMessage } = slip;

        // Atualiza elementos da página
        adviceMessageElement.textContent = adviceMessage;
        adviceNumberElement.textContent = `ADVICE #${adviceNumber}`;

    } catch (error) {
        // Tratamento de erro
        console.error("Erro ao buscar conselho:", error);
        adviceMessageElement.textContent = "Não foi possível carregar o conselho. Tente novamente.";
    }
}

// Adiciona evento de clique para buscar novo conselho
adviceButton.addEventListener("click", fetchAdvice);

// Carrega um conselho inicial ao carregar a página
//fetchAdvice();