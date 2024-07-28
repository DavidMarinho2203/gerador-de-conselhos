
const btnTrocar = document.getElementById('trocar__conselho')
btnTrocar.addEventListener('click',async ()=> {
    const response = await fetch('https://api.adviceslip.com/advice').then(res => res.json())
    const dados = response

    document.getElementById('id__conselho').innerHTML = dados.slip.id;
    document.getElementById('texto__conselho').innerHTML = `"${dados.slip.advice}"`;

})

// Responsividade
window.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 768) {
        document.querySelector('#linha').src = './assets/img/pattern-divider-desktop.svg'
    } else {
        document.querySelector('#linha').src = './assets/img/pattern-divider-mobile.svg'
    }
    

})