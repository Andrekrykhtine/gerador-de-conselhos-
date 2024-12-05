const bntdado = document.getElementById('botao')
const conselhos = document.getElementById('conselho')
const mensagens = document.getElementById('mensagem')


async function pegarConselho() {
    try {
        const url = "https://api.adviceslip.com/advice"
        const resposta = await fetch(url); //fecth pega a resposta do api e gera uma promise

        if (!resposta.ok) {
            throw new Error("Ocorreu um erro ao tentar buscar as informações da API");
        }


        const conselho = await resposta.json()//.json retorna uma promise
        const conselhoRecebido = conselho.slip.advice;
        const numeroConselho = conselho.slip.id
        mensagens.textContent = conselhoRecebido
        conselhos.textContent += numeroConselho
    } catch (error) {
        console.error("Erro ao tentar buscar as informações da API", error);
    }

}
botao.addEventListener("click", () => { pegarConselho() })