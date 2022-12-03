'use strict';



const body = document.querySelector('body');

const onClickSub = () => {

    let nome = document.getElementById('nome').value;
    let cognome = document.getElementById('cogn').value;
    //console.log(`${nome} ${cognome}`);


    //const para = document.createElement('h1');
    //para.id = 'bt';
    const para = document.getElementById('bt');
    para.textContent = `${nome} ${cognome}`;


    para.addEventListener('mouseenter', (event) => {
        // highlight the mouseenter target
        let target = event.target;
        target.style.color = "purple";
        target.style.border = '1px solid purple';
        target.style.padding = 'none';
    }, false);
    para.addEventListener('mouseleave', (event) => {
        let target = event.target;
        target.style.color = 'green';
        target.style.border = '1px solid green';
        target.style.padding = '0 0 0 0';
    }, false);
}
const changeColor = () => {
    //let h = document.getElementById('bt');
    document.h1.style.color = 'red';


}


