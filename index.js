// Função para criptografar o texto
function criptografar(texto) {
    let textoCriptografado = texto.replace(/e/g, "enter")
                                  .replace(/i/g, "imes")
                                  .replace(/a/g, "ai")
                                  .replace(/o/g, "ober")
                                  .replace(/u/g, "ufat");
    return textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar(textoCriptografado) {
    let textoOriginal = textoCriptografado.replace(/enter/g, "e")
                                          .replace(/imes/g, "i")
                                          .replace(/ai/g, "a")
                                          .replace(/ober/g, "o")
                                          .replace(/ufat/g, "u");
    return textoOriginal;
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
    const mensagem = document.querySelector(".mensagem");
    mensagem.select();
    document.execCommand("copy");
}

// Função para manipular o DOM e adicionar os eventos nos botões
function configurarEventos() {
    const btnCriptografar = document.querySelector(".btn-encriptar");
    const btnDescriptografar = document.querySelector(".btn-desencriptar");
    const btnCopiar = document.querySelector(".btn-copiar");
    const areaTexto = document.querySelector(".text-area");
    const mensagem = document.querySelector(".mensagem");

    btnCriptografar.addEventListener("click", () => {
        const texto = areaTexto.value.toLowerCase();
        const textoCriptografado = criptografar(texto);
        mensagem.value = textoCriptografado;
    });

    btnDescriptografar.addEventListener("click", () => {
        const textoCriptografado = areaTexto.value.toLowerCase();
        const textoOriginal = descriptografar(textoCriptografado);
        mensagem.value = textoOriginal;
    });

    btnCopiar.addEventListener("click", copiarTexto);
}

// Configurar os eventos após carregar a página
document.addEventListener("DOMContentLoaded", configurarEventos);
