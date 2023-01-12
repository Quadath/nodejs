const path = require('path');
const fs = require('fs');

// console.log(__dirname);
// fs.mkdirSync(path.resolve(__dirname, 'dir'));

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.writeFile(path.resolve(__dirname, "test.txt"), "i like onion", (err) => {
//     if (err) {
//         throw err;
//     }
// })

// fs.appendFile(path.resolve(__dirname, "test.txt"), "i like onion", (err) => {
//     if (err) {
//         throw err;
//     }
// })

const writeFileAsync = async = (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return err;
        }
        resolve();
    }))
}
const appendFileAsync = async = (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return err;
        }
        resolve();
    }))
}
//PROMISES
writeFileAsync(path.resolve(__dirname, 'test.txt'), 'first')
    .then((appendFileAsync(path.resolve(__dirname, 'test.txt'), 'second')))
    .then((appendFileAsync(path.resolve(__dirname, 'test.txt'), 'third')))