let numero = parseInt(localStorage.getItem('contador')) || 0;
/*-----------botões contador----------*/
function menos() {
    numero -= 1
    salvar()
    render()
}
function zero() {
    numero = 0
    salvar()
    render()
}
function mais() {
    numero += 1
    salvar()
    render()
}
/*-----------botões cor----------*/
function toggle() {
    if (document.body.classList.contains('dark')) {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
    } else {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
    }
    salvar2()
}
/*-----------funções----------*/
function dark() {
    document.body.className = 'dark'
}
function light() {
    document.body.className = 'light'
}
function salvar() {
    localStorage.setItem('contador', numero)
}
function salvar2() {
    localStorage.setItem('tema', document.body.className)
}
function render() {
    document.querySelector('#resultado').innerHTML = numero
}
function load() {
    const tema = localStorage.getItem('tema')
    if (tema) {
        document.body.className = tema
    }
}
load()
render()