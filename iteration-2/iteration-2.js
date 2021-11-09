// 2.1-------------------------------------------------->
const game = {
    title: 'The last us 2', 
    gender: ['action', 'zombie', 'survival'], 
    year: 2020
};

const { title, gender, year } = game;

console.log(`El videojuego se titula ${title}, pertenece a los generos de ${gender} y es del año ${year}`);

// 2.2-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [ fruit1, fruit2, fruit3 ] = fruits;

console.log(`Fruit 1: ${fruit1}, Fruit 2: ${fruit2}, Fruit 3: ${fruit3}`);

// 2.3-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const resutlAnimal = animalFunction();

const { name, race } = resutlAnimal;

console.log(`El nombre del animal es: ${name} y su raza es: ${race}`)

// 2.4-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const car = {nameCar: 'Mazda 6', itv: [2011, 2015, 2020] };


const { nameCar , itv} = car;

const [ year1, year2, year3 ] = itv;

console.log(`El nombre del vehiculo es: ${nameCar} y los años de itv pasados son: ${year1}, ${year2} y ${year3}`)