// 4.1-------------------------------------------------->
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];


const names = users.map(user => {
        return user.name
})

console.log('Array devuelto en el map:', names);

// 4.2-------------------------------------------------->
console.log('---------------------------------------------------------------------------');
const changeNames = users.map(user => {
    if(user.name.includes('A')){
        user.name = 'Anacleto'
    }
    return user.name;
    
})
console.log('Nombres cambiados: ',changeNames)


// 4.3-------------------------------------------------->
console.log('---------------------------------------------------------------------------');
const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];


const allCities = cities.map(city =>{
    const visited = city.isVisited;
    if(visited === true){
        city.name = city.name + ' --> Visitado';
    } else {
        city.name = city.name + ' --> NO visitado';
    }
    return city
})

