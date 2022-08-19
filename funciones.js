// Declaración de mis variables:


let eligePokemon = prompt('Elige tu pokémon para iniciar la batalla. Tus opciones son: chikorita, cyndaquil y totodile.')
const primerOponente = 'Houndour'
const segundoOponente = 'Rowlet'
const tercerOponente = 'Fennekin'

window.addEventListener( 'DOMContentLoaded', (event) => {
    while(eligePokemon === 'chikorita'){
        alert('¡Felicidades! Ahora tienes un Chikorita con 100 PS');
        alert('Tu oponente es: '+ primerOponente)
    } if (eligePokemon === 'cyndaquil'){
        alert('¡Felicidades! Ahora tienes un Cyndaquil con 100 PS');
        alert('Tu oponente es: '+ segundoOponente)
    } else if(eligePokemon === 'totodile'){
        alert('¡Felicidades! Ahora tienes un Totodile con 100 PS');
        alert('Tu oponente es: '+ tercerOponente)
    } else if((eligePokemon !== 'chikorita') || (eligePokemon !== 'cyndaquil') || (eligePokemon !== 'totodile')){
        alert('Ingresa un Pokémon válido.');
        prompt('Elige tu pokémon para iniciar la batalla. Tus opciones son: chikorita, cyndaquil y totodile.')
    } else if ((eligePokemon === 'chikorita') || (eligePokemon === 'cyndaquil') || (eligePokemon === 'totodile')){
        alert('¡Prepárate para la batalla!')
    } 
}) 


