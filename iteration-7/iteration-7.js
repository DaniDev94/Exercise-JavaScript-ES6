// 7.1-------------------------------------------------->
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];


const sumTotalScore = exams.reduce((acc, cur)=>{
   return acc + cur.score;
},0)

console.log(sumTotalScore)


// 7.2-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const sumApproved = exams.reduce((acc, exam)=>{
    return exam.score >= 5 ? acc + exam.score : acc;
},0)

console.log(sumApproved)



// 7.3-------------------------------------------------->
console.log('---------------------------------------------------------------------------');

const sumTotal = exams.reduce((acc, exam)=>{
    return acc + exam.score;
},0)


const totalAverage = sumTotal / exams.length
console.log(totalAverage)



