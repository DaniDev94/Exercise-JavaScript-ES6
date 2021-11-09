// 5.1-------------------------------------------------->
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const greaterThan = ages.filter(age => {
    // retornamos el filtro 
     return age > 18;
});

console.log('Mayores que 18:',greaterThan);


// 5.2-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const evenNumber = ages.filter(age => {
    return age % 2 == 0;
});

console.log('Numeros pares:',evenNumber);


// 5.3-------------------------------------------------->
console.log('---------------------------------------------------------------------------');


const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const playerLol = streamers.filter(streamer => {
    return streamer.gameMorePlayed == 'League of Legends';
});

console.log('Jugadores del LoL ---> ',playerLol);

// 5.4-------------------------------------------------->
console.log('---------------------------------------------------------------------------');


const nameIncludesU = streamers.filter(streamer => {
    return streamer.name.includes('u');
});

console.log('Letra U ---> ', nameIncludesU);



// 5.5-------------------------------------------------->
console.log('---------------------------------------------------------------------------');


const includesLegends = streamers.filter(streamer => {
    return streamer.gameMorePlayed.includes('Legends');
});

console.log('Incluyen Legends -->',includesLegends)

const toUppercase = includesLegends.filter(legends => {
    return legends.age > 35 ? legends.gameMorePlayed = legends.gameMorePlayed.toUpperCase() : legends.gameMorePlayed;
})

console.log('Mayor de 35 -->',toUppercase)
