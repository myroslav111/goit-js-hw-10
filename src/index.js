import './css/styles.css';

const DEBOUNCE_DELAY = 300;

fetch('https://pokeapi.co/api/v2/move-learn-method/2').then(response => {
return response.json()}).then(pokemon => {
    console.log(pokemon);
}).catch(error => {
    console.log(error);
})




