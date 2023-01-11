const path = require('path');

// console.log(__dirname);
// console.log(path.join(__dirname, '..'));

// console.log("Абсолютный путь", path.resolve('first', 'second', 'third')); 
// const fullpath = path.resolve('first', 'second', 'third');
// console.log('Парсинг пути', path.parse(fullpath))

//URL
const siteURL = 'http://localhost:8888/users?id=5123'
const url = new URL(siteURL);
console.log(url);