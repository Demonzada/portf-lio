function ativar(){
    let oculto = document.querySelector(`.info-oculta${cursonum}`)

    for(var i= 1 ; i < 5; i++) {
        let desligaroculto = document.querySelector(`.info-oculta${i}`)
        desligaroculto.style.display = 'none'
    }

    if (oculto.style.display === 'block') {
        oculto.style.display = 'none'
    } else {
        oculto.style.display = 'block'
    }
}

function nomear() {
    let texto = document.querySelector(`.info-oculta-texto${cursonum}`)

    texto.innerHTML = `${curso}`

}


function curso_botao(el) {

    cursonum = el
    curso = 
    el === 1 ? "Eu aprendi na Alura <strong>HTML, CSS, Javascript, GIT e GITHUB!</strong>" : 
    el === 2 ? "Eu aprendi na Fundação Bradesco <strong>HTML, CSS na prática!</strong>" : 
    el === 3 ? "Eu aprendi na Prime Cursos <strong>PHP e mySQL na prática!</strong>" : 
    el === 4 ? "Eu aprendi na EspecializaTI <strong>HTML 5 Samurai e CSS!</strong>" : "Nenhum"


    nomear()
    ativar()
}