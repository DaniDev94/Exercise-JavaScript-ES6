// 3.1-------------------------------------------------->
const pointsList = [32, 54, 21, 64, 75, 43];

const copyList = [...pointsList];

console.log(copyList);


// 3.2-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copyToy = {...toy};

console.log(copyToy);

// 3.3-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

const unionList = [...pointsList1, ...pointsList2];

console.log(unionList);


// 3.4-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const newToy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const unionToy = {...newToy, ...toyUpdate};

console.log(unionToy);

// 3.5-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const copyColors = [...colors];
const deleteColor = copyColors.splice(2, 1);

console.log('Array inicial:', colors);
console.log('Copia del array modificada:', copyColors);
