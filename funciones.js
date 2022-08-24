let eligePokemon = prompt('¡Bienvenido a la región de Johto! Para dar inicio a tu aventura Pokémon, elige a tu compañero pokémon de la región: \nChikorita \nCyndaquil \nTotodile')
const primerOponente = 'Houndour'
const segundoOponente = 'Rowlet'
const tercerOponente = 'Fennekin'

while((eligePokemon !== 'chikorita') && (eligePokemon !== 'cyndaquil') && (eligePokemon !== 'totodile')){
    alert('Elige un Pokémon correcto.');
    eligePokemon = prompt('¡Bienvenido a la región de Johto! Para dar inicio a tu aventura Pokémon, elige a tu compañero pokémon de la región.')

    if(eligePokemon === 'chikorita'){
        alert('¡Felicidades! El Profesor Elm te ha dado un ' +eligePokemon+ ' con 100 PS (puntos de salud).');
        alert('Tu enemigo será ' +primerOponente)
    } else if(eligePokemon === 'cyndaquil'){
        alert('¡Felicidades! El Profesor Elm te ha dado un ' +eligePokemon+ ' con 100 PS (puntos de salud).');
        alert('Tu enemigo será '+segundoOponente)
    } else if(eligePokemon === 'totodile'){
        alert('¡Felicidades! El Profesor Elm te ha dado un ' +eligePokemon+ ' con 100 PS (puntos de salud).');
        alert('Tu enemigo será '+tercerOponente)
    }
} 

alert('¡Prepárate para la aventura!')