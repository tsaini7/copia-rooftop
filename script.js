//ANIMACION DEL SCROLL

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();


function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

// FIN DE ANIMACION DEL SCROLL

// script de inner en ecosystem //

const tarjetaMatching = document.querySelector('#tmatching');
const tarjetaAcademy = document.querySelector('#tacademy');
const tarjetaStations = document.querySelector('#tstations');
const tarjetaTuring = document.querySelector('#tturing');
const tarjetaStore = document.querySelector('#tstore');

const textoMatching = document.querySelector('#matching');
const textoAcademy = document.querySelector('#academy');
const textoStations = document.querySelector('#stations');
const textoTuring = document.querySelector('#turing');
const textoStore = document.querySelector('#store');

tarjetaMatching.addEventListener('click', () =>{
    textoMatching.style.display = 'block';
    tarjetaMatching.classList.add('shadow-box');
    tarjetaMatching.style.transition = '0.5s'
    textoMatching.style.transition = '0.5s'
});

tarjetaAcademy.addEventListener('click', () =>{
    textoAcademy.style.display = 'block';
    tarjetaAcademy.classList.add('shadow-box');
    tarjetaAcademy.style.transition = '0.5s'
    textoAcademy.style.transition = '0.5s'
});

tarjetaStations.addEventListener('click', () =>{
    textoStations.style.display = 'block';
    tarjetaStations.classList.add('shadow-box');
    tarjetaStations.style.transition = '0.5s'
    textoStations.style.transition = '0.5s'
});

tarjetaTuring.addEventListener('click', () =>{
    textoTuring.style.display = 'block';
    tarjetaTuring.classList.add('shadow-box');
    tarjetaTuring.style.transition = '0.5s'
    textoTuring.style.transition = '0.5s'
});

tarjetaStore.addEventListener('click', () =>{
    textoStore.style.display = 'block';
    tarjetaStore.classList.add('shadow-box');
    tarjetaStore.style.transition = '0.5s'
    textoStore.style.transition = '0.5s'
});


function ocultarovermatching () {
    textoMatching.style.display = 'none';
    textoAcademy.style.display = 'none';
    textoStations.style.display = 'none';
    textoTuring.style.display = 'none';
    textoStore.style.display = 'none';
    tarjetaMatching.classList.remove('shadow-box');
    tarjetaAcademy.classList.remove('shadow-box');
    tarjetaStations.classList.remove('shadow-box');
    tarjetaTuring.classList.remove('shadow-box');
    tarjetaStore.classList.remove('shadow-box');
}

tarjetaMatching.onmouseout = ocultarovermatching;
tarjetaAcademy.onmouseout = ocultarovermatching;
tarjetaStations.onmouseout = ocultarovermatching;
tarjetaTuring.onmouseout = ocultarovermatching;
tarjetaStore.onmouseout = ocultarovermatching;


//FINALIZAN EVENTOS DEL ECOSYSTEM //

