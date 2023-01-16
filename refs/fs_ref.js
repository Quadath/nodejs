const fs = require('fs')
const path = require('path')

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err
//     console.log('Папка создана')
// })

fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello world', err => {
    if (err) throw err
    console.log('Файл был создан')
})