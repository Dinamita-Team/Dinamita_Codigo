const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

let valueByDefault = parseInt(inputQuantity.value);

// Funciones click

btnIncrement.addEventListener('click', () => {
    //Añade funcionalidad al botón de incrementar
    valueByDefault += 1;
    inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener('click', () => {
    //Detenemos la función cuando llegué a 1, para que no tome valores negativos
    if(valueByDefault === 1){
        return
    };

    valueByDefault -= 1;
    inputQuantity.value = valueByDefault;
});


// Toggle ---------------------------------------------------------------------------------
// Constantes Toggle Titles
const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const toggleReviews = document.querySelector('.title-additional-reviews');

// Constantes Contenido Texto
const contentDescription = document.querySelector('.text-description');
const contentAdditionalInformation = document.querySelector('.text-additional-information');
const contentReviews = document.querySelector('.text-additional-reviews');

// Funciones Toggle
toggleDescription.addEventListener('click', () =>{
    contentDescription.classList.toggle('hidden');
});
toggleAdditionalInformation.addEventListener('click', () =>{
    contentAdditionalInformation.classList.toggle('hidden');
});
toggleReviews.addEventListener('click', () =>{
    contentReviews.classList.toggle('hidden');
});
 