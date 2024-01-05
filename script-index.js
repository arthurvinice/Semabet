const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))
console.log(usuarioLogado)

function verificarLoginTabela(){
    if (!usuarioLogado) {
        window.location.href = 'tabelageral.html'
    } else {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado))
        window.location.href = 'tabelageral_logado.html'
       
    }
}

