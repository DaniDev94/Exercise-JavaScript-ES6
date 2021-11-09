// 6.1-------------------------------------------------->

const numbers = [32, 21, 63, 95, 100, 67, 43];

const findNumber = numbers.find(number => number > 99);

console.log(findNumber)


// 6.2-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const findMovie = movies.find(movie => {
    return movie.date === 2010;
})

console.log(findMovie);

// 6.3-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];


const findAlien = aliens.find(alien => {
    return alien.name === 'Cucushumushu';
})

// console.log(findAlien);

const findMutation = mutations.find(mutation => {
    return mutation.name === 'Porompompero';
})

// console.log(findMutation);

const fusionResult = {...findAlien, mutation:{...findMutation}};

console.log(fusionResult);


